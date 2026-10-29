---
layout: academic
permalink: /
title: "学术主页"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="hero" id="about" aria-labelledby="hero-title">
  <div class="container hero__inner">
    <div class="hero__copy">
      <p class="eyebrow">ACADEMIC PROFILE <span class="eyebrow__line" aria-hidden="true"></span> 浙江大学软件学院</p>
      <h1 id="hero-title">姚畅 <span lang="en">Chang Yao</span></h1>
      <p class="hero__role">浙江大学软件学院研究员 <span aria-hidden="true">·</span> 博士生导师</p>
      <div class="hero__actions">
        <a class="button button--primary" href="#research">了解研究方向 <span aria-hidden="true">↘</span></a>
        <a class="button button--quiet" href="mailto:changy@zju.edu.cn">邮件联系 <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div class="hero__visual">
      <div class="portrait-frame">
        <img src="images/yc-2020.jpeg" alt="姚畅的肖像照" fetchpriority="high">
      </div>
    </div>
  </div>
</section>

<section class="section section--tinted" id="research" aria-labelledby="research-title">
  <div class="container">
    <div class="section-topline">
      <div>
        <p class="section-number">01 / RESEARCH</p>
        <h2 id="research-title">研究方向</h2>
      </div>
    </div>
    <div class="research-grid">
      <article class="research-area">
        <span class="research-area__index">01</span>
        <h3>分布式系统与数据管理</h3>
        <p>关注分布式事务、日志恢复、数据湖分析与资源管理。</p>
        <span class="research-area__en" lang="en">Distributed Systems &amp; Data Management</span>
      </article>
      <article class="research-area">
        <span class="research-area__index">02</span>
        <h3>医学人工智能</h3>
        <p>研究医学图像、多模态数据与放射报告生成等问题。</p>
        <span class="research-area__en" lang="en">Medical Artificial Intelligence</span>
      </article>
      <article class="research-area">
        <span class="research-area__index">03</span>
        <h3>大模型与智能应用</h3>
        <p>探索代码生成、程序修复、模型协作、多模态理解与金融量化。</p>
        <span class="research-area__en" lang="en">Foundation Models &amp; Applications</span>
      </article>
    </div>
  </div>
</section>

<section class="section projects-section" id="representative-projects" aria-labelledby="projects-title">
  <div class="container">
    <div class="section-topline">
      <div>
        <p class="section-number">02 / REPRESENTATIVE PROJECTS</p>
        <h2 id="projects-title">代表性项目</h2>
      </div>
    </div>
    <div class="project-grid">
      <article class="project-card project-card--featured">
        <div class="project-card__content">
          <span class="project-card__index">01 / AQuant</span>
          <h3>AQuant</h3>
          <p class="project-card__subtitle">AI驱动的量化交易模型</p>
          <p>基于 AI 原生能力，AQuant 在沪深300、中证500、中证1000和中证2000四个指数的成分股中，识别未来一至两周相对更强的股票并建立多头组合；同时根据组合敞口配置股指期货空头，对冲大盘涨跌。策略收益主要来自选股能力，而非市场方向。</p>
        </div>
        <div class="project-chart" aria-labelledby="aquant-chart-title">
          <div class="project-chart__heading">
            <h4 id="aquant-chart-title">AQuant 模型实际交易净值与主要指数走势</h4>
            <span>2026.09.11 = 1</span>
          </div>
          <div class="project-chart__plot" id="aquant-chart-plot" hidden></div>
          <div class="project-chart__empty" id="aquant-chart-empty" role="status">实盘与指数数据接入后展示</div>
          <ul class="project-chart__legend" id="aquant-chart-legend" hidden></ul>
          <p class="project-chart__meta" id="aquant-chart-meta" hidden></p>
        </div>
      </article>
      <article class="project-card project-card--ai4h" aria-labelledby="ai4h-title">
        <div class="project-card__content">
          <span class="project-card__index">02 / AI4H</span>
          <h3 id="ai4h-title">AI4H</h3>
          <p class="project-card__subtitle">医院 AI 操作系统</p>
          <p>AI 正在改变医学知识的获取与使用方式，也将改变诊疗、服务与研究的组织方式。医院 AI 操作系统以结果和任务为导向，构建临床数据供给与分析基础设施，重塑医疗业务流程，旨在促进患者获益、提升服务质量与医院整体效率。项目组围绕 AI4H 的相关成果与技术已在全国超过 300 家医院实际落地应用，支撑 CDSS、VTE、病历质控、患者追踪等医疗场景。</p>
          <p class="project-card__foundation">前期研究：可计算医学知识库、启真医学大模型。</p>
        </div>
        <div class="project-media-grid">
          <figure class="project-media">
            <a href="assets/ai4h-architecture.png" target="_blank" rel="noopener noreferrer" aria-label="查看医院 AI 操作系统架构图大图">
              <img src="assets/ai4h-architecture.png" alt="医院 AI 操作系统四层架构：多源数据、患者智能档案、医疗数据智能体和应用场景" width="1386" height="1002" loading="lazy" decoding="async">
            </a>
            <figcaption>医院 AI 操作系统架构 · 点击图片查看大图</figcaption>
          </figure>
          <figure class="project-media">
            <video controls playsinline preload="metadata" poster="assets/ai4h-apts-poster.svg" aria-label="APTS AI 精准患者筛查系统应用演示">
              <source src="assets/ai4h-apts-demo.mp4" type="video/mp4">
              您的浏览器不支持视频播放。
            </video>
            <figcaption>APTS · AI 精准患者筛查系统应用演示<span class="project-media__note">相关数据均为模拟数据，实际数据以医院发布和统计的数据为准。</span></figcaption>
          </figure>
        </div>
      </article>
      <article class="project-card project-card--compact project-card--pending">
        <span class="project-card__index">03 / AI4S</span>
        <h3>AI4S</h3>
        <p class="project-card__subtitle">临床试验智能领航系统</p>
        <p class="project-card__soon">Coming soon</p>
      </article>
    </div>
    <script type="application/json" id="aquant-nav-data">{{ site.data.aquant_nav | jsonify }}</script>
  </div>
</section>

<section class="section" id="selected-publications" aria-labelledby="selected-title">
  <div class="container">
    <div class="section-topline section-topline--publications">
      <div>
        <p class="section-number">03 / REPRESENTATIVE PUBLICATIONS</p>
        <h2 id="selected-title">部分代表性论文</h2>
      </div>
      <a class="text-link" href="publications/index.html">查看论文全集 <span aria-hidden="true">↗</span></a>
    </div>
    <div class="publication-list">
      <article class="publication-item">
        <p class="publication-item__year">2026 <span>NeurIPS</span></p>
        <div>
          <h3><a href="https://arxiv.org/pdf/2609.30906" target="_blank" rel="noopener noreferrer">ToolSearcher: Optimizing Tool Selection at Scale via Reinforcement Learning <span aria-hidden="true">↗</span></a></h3>
          <p class="publication-item__authors">Zhenlong Dai, Xujie Song, Zitong Wang, Tong Niu, Jian liu, Weiqiang Wang, Xiu Tang, Sai Wu, <strong>Chang Yao</strong>, Jingyuan Chen</p>
        </div>
      </article>
      <article class="publication-item">
        <p class="publication-item__year">2026 <span>EMNLP</span></p>
        <div>
          <h3><a href="https://aclanthology.org/2026.emnlp-main.2134.pdf" target="_blank" rel="noopener noreferrer">Enhancing Repository-Level Code Completion with Reinforcement Learning in Real-World Scenarios <span aria-hidden="true">↗</span></a></h3>
          <p class="publication-item__authors">Zhenlong Dai, Zhuoluo Zhao, Xiu Tang, Sai Wu, <strong>Chang Yao</strong>, Zhipeng Gao, Jingyuan Chen</p>
        </div>
      </article>
      <article class="publication-item">
        <p class="publication-item__year">2026 <span>EMNLP</span></p>
        <div>
          <h3><a href="https://aclanthology.org/2026.emnlp-main.554.pdf" target="_blank" rel="noopener noreferrer">Emotion Understanding in Streaming Video with Trajectory-Aware Reliability <span aria-hidden="true">↗</span></a></h3>
          <p class="publication-item__authors">Qingsong Wang, Qigong Lei, Zitong Wang, Bohan Yu, Zhiang Dong, Jian liu, Weiqiang Wang, <strong>Chang Yao</strong>, Jingyuan Chen</p>
        </div>
      </article>
      <article class="publication-item">
        <p class="publication-item__year">2026 <span>ACL</span></p>
        <div>
          <h3><a href="https://aclanthology.org/2026.acl-long.1718.pdf" target="_blank" rel="noopener noreferrer">Enhancing Reinforcement Learning for Radiology Report Generation with Evidence-aware Rewards and Self-correcting Preference Learning <span aria-hidden="true">↗</span></a></h3>
          <p class="publication-item__authors">Qin Zhou, Guoyan Liang, Qianyi Yang, Jingyuan Chen, Sai Wu, <strong>Chang Yao</strong>, Zhe Wang</p>
        </div>
      </article>
      <article class="publication-item">
        <p class="publication-item__year">2026 <span>ICLR</span></p>
        <div>
          <h3><a href="https://proceedings.iclr.cc/paper_files/paper/2026/file/37771cc0be272368102a37f202bb88d8-Paper-Conference.pdf" target="_blank" rel="noopener noreferrer">Causal-Steer: Disentangled Continuous Style Control without Parallel Corpora <span aria-hidden="true">↗</span></a></h3>
          <p class="publication-item__authors">Qingsong Wang, <strong>Chang Yao</strong>, Jingyuan Chen</p>
        </div>
      </article>
      <article class="publication-item">
        <p class="publication-item__year">2026 <span>AAAI</span></p>
        <div>
          <h3><a href="https://ojs.aaai.org/index.php/AAAI/article/download/40300/44261" target="_blank" rel="noopener noreferrer">Learner-Tailored Program Repair: A Solution Generator with Iterative Edit-Driven Retrieval Enhancement <span aria-hidden="true">↗</span></a></h3>
          <p class="publication-item__authors">Zhenlong Dai, Zhuoluo Zhao, Hengning Wang, Xiu Tang, Sai Wu, <strong>Chang Yao</strong>, Zhipeng Gao, Jingyuan Chen</p>
        </div>
      </article>
      <article class="publication-item">
        <p class="publication-item__year">2025 <span>ICCV</span></p>
        <div>
          <h3><a href="https://openaccess.thecvf.com/content/ICCV2025/papers/Zhou_Learnable_Retrieval_Enhanced_Visual-Text_Alignment_and_Fusion_for_Radiology_Report_ICCV_2025_paper.pdf" target="_blank" rel="noopener noreferrer">Learnable Retrieval Enhanced Visual-Text Alignment and Fusion for Radiology Report Generation <span aria-hidden="true">↗</span></a></h3>
          <p class="publication-item__authors">Qin Zhou, Guoyan Liang, Xindi Li, Jingyuan Chen, Zhe Wang, <strong>Chang Yao</strong>, Sai Wu</p>
        </div>
      </article>
      <article class="publication-item">
        <p class="publication-item__year">2025 <span>AAAI</span></p>
        <div>
          <h3><a href="https://ojs.aaai.org/index.php/AAAI/article/download/32545/34700" target="_blank" rel="noopener noreferrer">Semantic-guided Masked Mutual Learning for Multi-modal Brain Tumor Segmentation with Arbitrary Missing Modalities <span aria-hidden="true">↗</span></a></h3>
          <p class="publication-item__authors">Guoyan Liang, Qin Zhou, Zhe Wang, Jingyuan Chen, Lin Gu, <strong>Chang Yao</strong>, Sai Wu, Bingcang Huang, Kai Chen</p>
        </div>
      </article>
      <article class="publication-item">
        <p class="publication-item__year">2025 <span>AAAI</span></p>
        <div>
          <h3><a href="https://ojs.aaai.org/index.php/AAAI/article/download/31988/34143" target="_blank" rel="noopener noreferrer">Less is More: Adaptive Program Repair with Bug Localization and Preference Learning <span aria-hidden="true">↗</span></a></h3>
          <p class="publication-item__authors">Zhenlong Dai, Bingrui Chen, Zhuoluo Zhao, Xiu Tang, Sai Wu, <strong>Chang Yao</strong>, Zhipeng Gao, Jingyuan Chen</p>
        </div>
      </article>
      <article class="publication-item">
        <p class="publication-item__year">2024 <span>ACL</span></p>
        <div>
          <h3><a href="https://aclanthology.org/2024.acl-long.207.pdf" target="_blank" rel="noopener noreferrer">MPCoder: Multi-user Personalized Code Generator with Explicit and Implicit Style Representation Learning <span aria-hidden="true">↗</span></a></h3>
          <p class="publication-item__authors">Zhenlong Dai, <strong>Chang Yao</strong>, Wenkang Han, Ying Yuan, Zhipeng Gao, Jingyuan Chen</p>
        </div>
      </article>
    </div>
    <a class="button button--outline" href="publications/index.html">浏览全部论文 <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="section section--tinted" id="teaching" aria-labelledby="teaching-title">
  <div class="container">
    <div class="section-topline">
      <div>
        <p class="section-number">04 / TEACHING &amp; SERVICE</p>
        <h2 id="teaching-title">教学与学术服务</h2>
      </div>
      <p class="section-intro">教学、学术交流与同行评议。</p>
    </div>
    <div class="teaching-grid">
      <div class="teaching-panel">
        <h3>开设课程</h3>
        <ul>
          <li>高级数据库技术</li>
          <li>医学人工智能关键技术及前沿应用</li>
        </ul>
      </div>
      <div class="teaching-panel">
        <h3>学术服务</h3>
        <p>担任 ACL、NeurIPS、CVPR、ICLR、ICML、ACM MM、AAAI、TKDE 等会议或期刊的审稿人。</p>
      </div>
    </div>
  </div>
</section>

<section class="section students-section" id="students" aria-labelledby="students-title">
  <div class="container">
    <div class="section-topline">
      <div>
        <p class="section-number">05 / STUDENTS</p>
        <h2 id="students-title">学生培养</h2>
      </div>
      <p class="student-note">* 表示共同第一作者</p>
    </div>
    <p class="student-intro">课题组每年招生名额充足，但是因为我个人的时间有限，为了保证与同学的合作质量，每年只招收 2–3 名学生。因此，希望同学自驱且主动，有清晰的目标，我们一起推动这个世界进步一点点。</p>
    <div class="student-group">
      <div class="student-group__heading">
        <h3>在读学生</h3>
      </div>
      <ul class="student-list">
        <li class="student-row"><strong class="student-row__name">戴振龙</strong><span class="student-row__stage">2022级硕士、2024级博士</span><span class="student-row__detail">NeurIPS'26、EMNLP'26、AAAI'26、AAAI'25、ACL'24</span></li>
        <li class="student-row"><strong class="student-row__name">宋旭洁</strong><span class="student-row__stage">2024级硕士</span></li>
        <li class="student-row"><strong class="student-row__name">杨千毅</strong><span class="student-row__stage">2025级博士</span><span class="student-row__detail">JBHI'25</span></li>
        <li class="student-row"><strong class="student-row__name">赵卓荦</strong><span class="student-row__stage">2025级硕士</span><span class="student-row__detail">AAAI'26（*）</span></li>
        <li class="student-row"><strong class="student-row__name">雷启功</strong><span class="student-row__stage">2025级硕士</span><span class="student-row__detail">NeurIPS'26</span></li>
        <li class="student-row"><strong class="student-row__name">曹庭雨</strong><span class="student-row__stage">2025级硕士</span></li>
        <li class="student-row"><strong class="student-row__name">楚梦琦</strong><span class="student-row__stage">2025级硕士</span></li>
        <li class="student-row"><strong class="student-row__name">连怡超</strong><span class="student-row__stage">2026级硕士</span></li>
      </ul>
    </div>
    <div class="student-group">
      <div class="student-group__heading"><h3>毕业学生</h3></div>
      <ul class="student-list">
        <li class="student-row"><strong class="student-row__name">王庆松</strong><span class="student-row__stage">2024–2026 · 硕士阶段（本课题组）</span><span class="student-row__detail"><span class="student-row__destination">2027年起转入浙江大学人工智能学院硕转博</span><span class="student-row__achievement">EMNLP'26、ICLR'26、CVPR'25（*）、EMNLP'25（Findings）</span></span></li>
        <li class="student-row"><strong class="student-row__name">梁国艳</strong><span class="student-row__stage">2022–2026 · 博士研究生</span><span class="student-row__detail"><span class="student-row__destination">联想研究院（北京）</span><span class="student-row__achievement">IJCAI'24、AAAI'25、ICCV'25（*）、ACL'26（*）</span></span></li>
        <li class="student-row"><strong class="student-row__name">韩文康</strong><span class="student-row__stage">2023–2026 · 硕士研究生</span><span class="student-row__detail"><span class="student-row__destination">腾讯（深圳）</span><span class="student-row__achievement">IJCAI'25、MM'25</span></span></li>
        <li class="student-row"><strong class="student-row__name">冯玥瑛</strong><span class="student-row__stage">2023–2026 · 硕士研究生</span><span class="student-row__detail"><span class="student-row__destination">腾讯（北京）</span><span class="student-row__achievement">ICMR'24、NeurIPS'24（*）</span></span></li>
        <li class="student-row"><strong class="student-row__name">崔奥明</strong><span class="student-row__stage">2022–2025 · 硕士研究生</span><span class="student-row__detail"><span class="student-row__destination">字节跳动</span><span class="student-row__achievement">浙江大学优秀研究生毕业生</span></span></li>
        <li class="student-row"><strong class="student-row__name">王孝东</strong><span class="student-row__stage">2022–2025 · 硕士研究生</span><span class="student-row__detail"><span class="student-row__destination">南京银行</span></span></li>
      </ul>
    </div>
  </div>
</section>

<section class="contact-section" id="contact" aria-labelledby="contact-title">
  <div class="container contact-section__inner">
    <div>
      <p class="section-number">06 / CONTACT</p>
      <h2 id="contact-title">学术交流与合作</h2>
      <p>欢迎通过浙江大学邮箱联系。</p>
    </div>
    <a href="mailto:changy@zju.edu.cn">changy@zju.edu.cn <span aria-hidden="true">↗</span></a>
  </div>
</section>
