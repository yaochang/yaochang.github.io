(() => {
  const dataNode = document.getElementById("aquant-nav-data");
  const plot = document.getElementById("aquant-chart-plot");
  const empty = document.getElementById("aquant-chart-empty");
  const legend = document.getElementById("aquant-chart-legend");
  const meta = document.getElementById("aquant-chart-meta");
  if (!dataNode || !plot || !empty || !legend || !meta) return;

  const definitions = [
    { id: "aquant", label: "AQuant 模型净值", color: "#193b5b", width: 3.2 },
    { id: "csi300", label: "沪深300", color: "#ad7545", width: 1.8 },
    { id: "csi500", label: "中证500", color: "#438385", width: 1.8 },
    { id: "csi1000", label: "中证1000", color: "#766699", width: 1.8 },
    { id: "csi2000", label: "中证2000", color: "#829451", width: 1.8 },
  ];
  let source;
  try {
    source = JSON.parse(dataNode.textContent);
  } catch (_) {
    return;
  }
  if (!source || !Array.isArray(source.series) || !/^\d{4}-\d{2}-\d{2}$/.test(source.base_date)) return;

  const parseSeries = (definition) => {
    const row = source.series.find((item) => item.id === definition.id);
    if (!row || !Array.isArray(row.points)) return null;
    const points = row.points.map((item) => {
      const date = String(item.date || "");
      const nav = Number(item.nav);
      const time = /^\d{4}-\d{2}-\d{2}$/.test(date) ? Date.parse(`${date}T00:00:00Z`) : NaN;
      return { date, nav, time };
    });
    if (points.some((item) => !Number.isFinite(item.time) || !Number.isFinite(item.nav) || item.nav <= 0)) return null;
    points.sort((a, b) => a.time - b.time);
    if (points.length < 2 || points[0].date !== source.base_date || Math.abs(points[0].nav - 1) > 0.000001) return null;
    if (points.some((item, index) => index > 0 && item.time === points[index - 1].time)) return null;
    return { ...definition, points };
  };
  const series = definitions.map(parseSeries);
  if (series.some((item) => !item)) return;

  const commonDates = new Set(series[0].points.map((item) => item.date));
  for (const item of series.slice(1)) {
    const dates = new Set(item.points.map((point) => point.date));
    for (const date of commonDates) if (!dates.has(date)) commonDates.delete(date);
  }
  const dates = [...commonDates].sort();
  if (dates.length < 2 || dates[0] !== source.base_date) return;
  for (const item of series) item.points = item.points.filter((point) => commonDates.has(point.date));

  const width = Math.max(360, Math.min(900, plot.parentElement.clientWidth - 24));
  const height = 264;
  const left = 53;
  const right = 18;
  const top = 16;
  const bottom = 34;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const firstTime = series[0].points[0].time;
  const lastTime = series[0].points.at(-1).time;
  const values = series.flatMap((item) => item.points.map((point) => point.nav));
  const low = Math.min(1, ...values);
  const high = Math.max(1, ...values);
  const padding = Math.max((high - low) * 0.1, 0.005);
  const yMin = Math.max(0, low - padding);
  const yMax = high + padding;
  const x = (point) => left + ((point.time - firstTime) / (lastTime - firstTime)) * plotWidth;
  const y = (value) => top + ((yMax - value) / (yMax - yMin)) * plotHeight;
  const svgNS = "http://www.w3.org/2000/svg";
  const make = (name, attributes) => {
    const node = document.createElementNS(svgNS, name);
    for (const [key, value] of Object.entries(attributes)) node.setAttribute(key, String(value));
    return node;
  };
  const svg = make("svg", {
    viewBox: `0 0 ${width} ${height}`,
    role: "img",
    "aria-label": `AQuant 模型净值（实盘账户净收益加回融资成本）与沪深300、中证500、中证1000、中证2000净值对比，${source.base_date} 均为 1，最新日期 ${dates.at(-1)}`,
  });
  for (let index = 0; index <= 4; index += 1) {
    const value = yMin + ((yMax - yMin) * index) / 4;
    const position = y(value);
    svg.appendChild(make("line", { x1: left, x2: width - right, y1: position, y2: position, stroke: "#dbe2e5", "stroke-width": 1 }));
    const label = make("text", { x: left - 9, y: position + 4, fill: "#6a7c89", "font-size": 11, "text-anchor": "end" });
    label.textContent = value.toFixed(3);
    svg.appendChild(label);
  }
  svg.appendChild(make("line", {
    x1: left, x2: width - right, y1: y(1), y2: y(1), stroke: "#9faeb8", "stroke-width": 1, "stroke-dasharray": "4 4",
  }));
  for (const item of series) {
    const path = item.points.map((point, index) => `${index === 0 ? "M" : "L"}${x(point).toFixed(2)},${y(point.nav).toFixed(2)}`).join(" ");
    svg.appendChild(make("path", {
      d: path, fill: "none", stroke: item.color, "stroke-width": item.width,
      "stroke-linecap": "round", "stroke-linejoin": "round",
    }));
    const last = item.points.at(-1);
    svg.appendChild(make("circle", { cx: x(last), cy: y(last.nav), r: item.id === "aquant" ? 4 : 2.5, fill: item.color }));
    const listItem = document.createElement("li");
    const swatch = document.createElement("i");
    swatch.setAttribute("aria-hidden", "true");
    swatch.style.setProperty("--series-color", item.color);
    listItem.append(swatch, document.createTextNode(`${item.label} ${last.nav.toFixed(4)}`));
    legend.appendChild(listItem);
  }
  for (const point of [series[0].points[0], series[0].points.at(-1)]) {
    const label = make("text", {
      x: x(point), y: height - 7, fill: "#6a7c89", "font-size": 11,
      "text-anchor": point.time === firstTime ? "start" : "end",
    });
    label.textContent = point.date.replaceAll("-", ".");
    svg.appendChild(label);
  }
  plot.appendChild(svg);
  meta.textContent = `AQuant 模型净值基于实盘账户净收益，将融资成本加回后计算；四条指数采用收盘点位。数据截至 ${dates.at(-1)}，相关数字将定期同步。`;
  empty.hidden = true;
  plot.hidden = false;
  legend.hidden = false;
  meta.hidden = false;
})();
