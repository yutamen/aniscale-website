export type Locale = "ja" | "en" | "zh" | "ko";

export const localeLabels: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  zh: "中文",
  ko: "한국어",
};

export const defaultLocale: Locale = "ja";

const translations = {
  ja: {
    nav: {
      home: "ホーム",
      pricing: "料金",
      download: "ダウンロード",
      getStarted: "始める",
    },
    hero: {
      badge: "macOSアプリ — あなたのMacでローカル処理",
      title1: "アニメ特化の",
      title2: "AI動画アップスケーリング",
      description:
        "アップスケール、ノイズ除去、フレーム補間を専用AIで実行。すべての処理はMac上でローカルに行われます。",
      downloadBtn: "macOS版をダウンロード",
      pricingBtn: "料金を見る",
      before: "処理前",
      after: "処理後",
      lowRes: "低解像度",
      aiEnhanced: "AI高画質化",
    },
    features: {
      title1: "4つの専用",
      title2: "AIエンジン",
      subtitle: "アニメ動画の品質向上に最適化された処理エンジン",
      items: [
        {
          title: "高精度アップスケーリング",
          description:
            "アニメの顔や細部を保持したまま、2x/3x/4xの高解像度化を実現。専用ニューラルネットワークによる高品質処理。",
        },
        {
          title: "線画・ディテール保持",
          description:
            "アニメ特有の線画やディテールを忠実に再現。保守的モードとノイズ除去モードで最大限のクリアさを実現。",
        },
        {
          title: "汎用動画アップスケーリング",
          description:
            "アニメから実写まで幅広いコンテンツに対応。高品質な4倍アップスケーリングで多様な映像を処理。",
        },
        {
          title: "フレーム補間",
          description:
            "オプティカルフローベースのフレーム補間技術。2x/4xのFPS向上でなめらかな動きを実現。",
        },
      ],
    },
    process: {
      title1: "シンプルな",
      title2: "3ステップ",
      title3: "で完了",
      subtitle:
        "クラウドへのアップロード不要。待ち時間なし。すべてMac上で完結。",
      steps: [
        {
          title: "動画をドロップ",
          description:
            "アニメ動画をAniscaleにドラッグ＆ドロップ。複数ファイルの一括処理にも対応。",
        },
        {
          title: "設定を選択",
          description:
            "5つのプリセットから選ぶか、AIモデル・拡大率・FPS・後処理パラメータをカスタマイズ。",
        },
        {
          title: "高品質な結果を取得",
          description:
            "AIがVulkan GPU加速で全フレームをローカル処理。出力はダウンロードフォルダに保存。",
        },
      ],
    },
    cta: {
      title: "アニメをアップスケールしませんか？",
      description:
        "Aniscaleを無料でダウンロードして、今すぐAIでアニメ動画を高品質化しましょう。",
      downloadBtn: "macOS版をダウンロード",
      pricingBtn: "料金を見る",
    },
    pricing: {
      title1: "シンプルな",
      title2: "ポイント制",
      title3: "料金",
      subtitle: "使った分だけお支払い。サブスクリプションや月額費用はありません。",
      bestValue: "おすすめ",
      perPoint: "/ ポイント",
      purchaseBtn: "アプリ内で購入",
      starter: "スターター",
      standard: "スタンダード",
      pro: "プロ",
      usageTitle: "ポイント消費の目安",
      usageContent: "内容",
      usagePoints: "ポイント",
      usageNote:
        "※ 実際のポイント消費は動画の複雑さや設定内容によって異なります。",
      usageItems: [
        { content: "5分のアニメクリップ (720p → 4K)", points: "約30pt" },
        { content: "24分のエピソード (480p → 1080p)", points: "約80pt" },
        { content: "24分のエピソード (1080p → 4K)", points: "約150pt" },
        {
          content: "フレーム補間 (24fps → 60fps, 24分)",
          points: "約100pt",
        },
      ],
      faqTitle: "よくある質問",
      faqs: [
        {
          q: "ポイント制はどのような仕組みですか？",
          a: "ポイントは動画の長さ、解像度、使用するAIモデルに基づいて消費されます。事前にポイントを購入してください。ポイントに有効期限はありません。",
        },
        {
          q: "購入前に試すことはできますか？",
          a: "新規アカウントにはボーナスポイントが付与されます。購入前にご自身の動画でお試しいただけます。",
        },
        {
          q: "どのような決済方法に対応していますか？",
          a: "Stripeの安全な決済プラットフォームを通じて、主要なクレジットカード（Visa、Mastercard、AMEX）に対応しています。",
        },
        {
          q: "返金はできますか？",
          a: "未使用のポイントは購入後30日以内であれば返金可能です。サポートまでお問い合わせください。",
        },
      ],
    },
    download: {
      title1: "ダウンロード",
      title2: "Aniscale",
      subtitle: "ダウンロード無料。AI処理にはポイント制の料金が適用されます。",
      appTitle: "Aniscale for macOS",
      appBinary: "ユニバーサルバイナリ (Apple Silicon + Intel)",
      appSize: "macOS 12以降 · 約500 MB",
      downloadBtn: ".appをダウンロード",
      comingSoon: "近日公開 — リリース後にダウンロードリンクが利用可能になります。",
      reqTitle: "システム要件",
      requirements: [
        { label: "OS", value: "macOS 12 Monterey 以降" },
        { label: "チップ", value: "Apple Silicon (M1/M2/M3/M4) または Intel" },
        { label: "RAM", value: "最低 8 GB、推奨 16 GB" },
        { label: "GPU", value: "Vulkan対応 (Metal via MoltenVK)" },
        { label: "ストレージ", value: "アプリ+モデルで約500 MB" },
        { label: "依存関係", value: "FFmpeg (Homebrewでインストール)" },
      ],
      setupTitle: "クイックセットアップ",
      setupSteps: [
        {
          title: "FFmpegをインストール",
          description: "ターミナルを開いて実行：",
          code: "brew install ffmpeg",
        },
        {
          title: "Aniscaleをダウンロード",
          description:
            ".appバンドルをダウンロードし、アプリケーションフォルダに移動します。",
          code: null,
        },
        {
          title: "起動してサインアップ",
          description:
            "Aniscaleを開き、アカウントを作成して、アニメ動画の処理を始めましょう。",
          code: null,
        },
      ],
    },
    footer: {
      tagline1: "アニメ特化AI動画アップスケーリング。",
      tagline2: "最先端のAIエンジンを搭載。",
      product: "プロダクト",
      features: "特徴",
      legal: "法的情報",
      terms: "利用規約",
      privacy: "プライバシーポリシー",
      transactions: "特定商取引法に基づく表記",
      copyright: "All rights reserved.",
    },
  },
  en: {
    nav: {
      home: "Home",
      pricing: "Pricing",
      download: "Download",
      getStarted: "Get Started",
    },
    hero: {
      badge: "macOS App — Runs locally on your machine",
      title1: "AI Video Upscaling",
      title2: "Built for Anime",
      description:
        "Upscale, denoise, and interpolate frames with 4 specialized AI engines. All processing happens locally on your Mac.",
      downloadBtn: "Download for macOS",
      pricingBtn: "View Pricing",
      before: "BEFORE",
      after: "AFTER",
      lowRes: "Low Resolution",
      aiEnhanced: "AI Enhanced",
    },
    features: {
      title1: "4 Specialized",
      title2: "AI Engines",
      subtitle:
        "Each engine optimized for different aspects of anime video enhancement",
      items: [
        {
          title: "High-Precision Upscaling",
          description:
            "Preserve anime faces and fine details while achieving 2x/3x/4x super-resolution. Powered by dedicated neural networks.",
        },
        {
          title: "Line Art & Detail Preservation",
          description:
            "Faithfully reproduce anime-specific line art and details. Conservative and denoise modes for maximum clarity.",
        },
        {
          title: "Versatile Video Upscaling",
          description:
            "Handle diverse content from anime to live-action. High-quality 4x upscaling for a wide range of video types.",
        },
        {
          title: "Frame Interpolation",
          description:
            "Optical flow-based frame interpolation technology. Smooth 2x/4x FPS enhancement for fluid motion.",
        },
      ],
    },
    process: {
      title1: "Simple",
      title2: "3-Step",
      title3: "Workflow",
      subtitle:
        "No cloud uploads. No waiting. Everything runs on your Mac.",
      steps: [
        {
          title: "Drop your videos",
          description:
            "Drag & drop anime videos into Aniscale. Supports batch processing of multiple files.",
        },
        {
          title: "Choose your settings",
          description:
            "Select from 5 quality presets or customize AI engine, scale, FPS, and post-processing parameters.",
        },
        {
          title: "Get stunning results",
          description:
            "AI processes every frame locally using Vulkan GPU acceleration. Output saved to your Downloads.",
        },
      ],
    },
    cta: {
      title: "Ready to upscale your anime?",
      description:
        "Download Aniscale for free and start enhancing your anime videos with AI today.",
      downloadBtn: "Download for macOS",
      pricingBtn: "See Pricing",
    },
    pricing: {
      title1: "Simple",
      title2: "Point-Based",
      title3: "Pricing",
      subtitle: "Pay only for what you use. No subscriptions, no monthly fees.",
      bestValue: "Best Value",
      perPoint: "/ point",
      purchaseBtn: "Purchase in App",
      starter: "Starter",
      standard: "Standard",
      pro: "Pro",
      usageTitle: "Point Usage Guide",
      usageContent: "Content",
      usagePoints: "Points",
      usageNote:
        "* Actual point consumption varies based on video complexity and selected settings.",
      usageItems: [
        { content: "5min anime clip (720p → 4K)", points: "~30pt" },
        { content: "24min episode (480p → 1080p)", points: "~80pt" },
        { content: "24min episode (1080p → 4K)", points: "~150pt" },
        {
          content: "Frame interpolation (24fps → 60fps, 24min)",
          points: "~100pt",
        },
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "How does the point system work?",
          a: "Points are consumed per video based on duration, resolution, and the AI engine used. Purchase points in advance and they never expire.",
        },
        {
          q: "Can I try before buying?",
          a: "New accounts receive bonus points to test the app with your own videos before purchasing.",
        },
        {
          q: "What payment methods are accepted?",
          a: "We accept all major credit cards (Visa, Mastercard, AMEX) through Stripe's secure payment platform.",
        },
        {
          q: "Are there refunds?",
          a: "Unused points can be refunded within 30 days of purchase. Contact support for assistance.",
        },
      ],
    },
    download: {
      title1: "Download",
      title2: "Aniscale",
      subtitle:
        "Free to download. Point-based pricing for AI processing.",
      appTitle: "Aniscale for macOS",
      appBinary: "Universal Binary (Apple Silicon + Intel)",
      appSize: "Requires macOS 12+ · ~500 MB",
      downloadBtn: "Download .app",
      comingSoon:
        "Coming soon — download link will be available after release.",
      reqTitle: "System Requirements",
      requirements: [
        { label: "OS", value: "macOS 12 Monterey or later" },
        { label: "Chip", value: "Apple Silicon (M1/M2/M3/M4) or Intel" },
        { label: "RAM", value: "8 GB minimum, 16 GB recommended" },
        { label: "GPU", value: "Vulkan-compatible (Metal via MoltenVK)" },
        { label: "Storage", value: "~500 MB for app + models" },
        { label: "Dependencies", value: "FFmpeg (installed via Homebrew)" },
      ],
      setupTitle: "Quick Setup",
      setupSteps: [
        {
          title: "Install FFmpeg",
          description: "Open Terminal and run:",
          code: "brew install ffmpeg",
        },
        {
          title: "Download Aniscale",
          description:
            "Download the .app bundle and move it to your Applications folder.",
          code: null,
        },
        {
          title: "Launch & Sign Up",
          description:
            "Open Aniscale, create an account, and start processing your anime videos.",
          code: null,
        },
      ],
    },
    footer: {
      tagline1: "Anime-focused AI video upscaling.",
      tagline2: "Powered by cutting-edge AI engines.",
      product: "Product",
      features: "Features",
      legal: "Legal",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      transactions: "Act on Specified Commercial Transactions",
      copyright: "All rights reserved.",
    },
  },
  zh: {
    nav: {
      home: "首页",
      pricing: "价格",
      download: "下载",
      getStarted: "开始使用",
    },
    hero: {
      badge: "macOS应用 — 在本地运行处理",
      title1: "动漫专属",
      title2: "AI视频超分辨率",
      description:
        "使用4个专用AI引擎进行超分辨率、降噪和帧插值。所有处理均在Mac本地完成。",
      downloadBtn: "下载macOS版",
      pricingBtn: "查看价格",
      before: "处理前",
      after: "处理后",
      lowRes: "低分辨率",
      aiEnhanced: "AI增强",
    },
    features: {
      title1: "4个专用",
      title2: "AI引擎",
      subtitle: "每个引擎都针对动漫视频增强的不同方面进行了优化",
      items: [
        {
          title: "高精度超分辨率",
          description:
            "在保留动漫面部和精细细节的同时，实现2x/3x/4x超分辨率。由专用神经网络驱动。",
        },
        {
          title: "线条和细节保留",
          description:
            "忠实再现动漫特有的线条和细节。保守模式和降噪模式实现最大清晰度。",
        },
        {
          title: "通用视频超分辨率",
          description:
            "从动漫到实拍，处理多种内容。高质量4倍超分辨率，适用于各种视频类型。",
        },
        {
          title: "帧插值",
          description:
            "基于光流的帧插值技术。2x/4x FPS提升，实现流畅运动。",
        },
      ],
    },
    process: {
      title1: "简单的",
      title2: "3步",
      title3: "工作流程",
      subtitle: "无需云端上传。无需等待。一切在Mac上完成。",
      steps: [
        {
          title: "拖放视频",
          description:
            "将动漫视频拖放到Aniscale中。支持多个文件的批量处理。",
        },
        {
          title: "选择设置",
          description:
            "从5个质量预设中选择，或自定义AI引擎、比例、FPS和后处理参数。",
        },
        {
          title: "获得出色结果",
          description:
            "AI使用Vulkan GPU加速在本地处理每一帧。输出保存到下载文件夹。",
        },
      ],
    },
    cta: {
      title: "准备好提升您的动漫画质了吗？",
      description:
        "免费下载Aniscale，立即开始使用AI增强您的动漫视频。",
      downloadBtn: "下载macOS版",
      pricingBtn: "查看价格",
    },
    pricing: {
      title1: "简单的",
      title2: "积分制",
      title3: "价格",
      subtitle: "按使用量付费。无订阅，无月费。",
      bestValue: "最佳性价比",
      perPoint: "/ 积分",
      purchaseBtn: "在应用内购买",
      starter: "入门",
      standard: "标准",
      pro: "专业",
      usageTitle: "积分使用指南",
      usageContent: "内容",
      usagePoints: "积分",
      usageNote: "※ 实际积分消耗因视频复杂度和设置而异。",
      usageItems: [
        { content: "5分钟动漫片段 (720p → 4K)", points: "约30pt" },
        { content: "24分钟剧集 (480p → 1080p)", points: "约80pt" },
        { content: "24分钟剧集 (1080p → 4K)", points: "约150pt" },
        { content: "帧插值 (24fps → 60fps, 24分钟)", points: "约100pt" },
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          q: "积分系统如何运作？",
          a: "积分根据视频时长、分辨率和使用的AI引擎消耗。提前购买积分，积分永不过期。",
        },
        {
          q: "购买前可以试用吗？",
          a: "新账户将获得奖励积分，可以在购买前用自己的视频进行测试。",
        },
        {
          q: "支持哪些支付方式？",
          a: "通过Stripe安全支付平台，支持所有主要信用卡（Visa、Mastercard、AMEX）。",
        },
        {
          q: "可以退款吗？",
          a: "未使用的积分可在购买后30天内退款。请联系客服获取帮助。",
        },
      ],
    },
    download: {
      title1: "下载",
      title2: "Aniscale",
      subtitle: "免费下载。AI处理采用积分制收费。",
      appTitle: "Aniscale for macOS",
      appBinary: "通用二进制 (Apple Silicon + Intel)",
      appSize: "需要 macOS 12+ · 约500 MB",
      downloadBtn: "下载 .app",
      comingSoon: "即将推出 — 发布后将提供下载链接。",
      reqTitle: "系统要求",
      requirements: [
        { label: "操作系统", value: "macOS 12 Monterey 或更高版本" },
        { label: "芯片", value: "Apple Silicon (M1/M2/M3/M4) 或 Intel" },
        { label: "内存", value: "最低 8 GB，推荐 16 GB" },
        { label: "GPU", value: "支持Vulkan (Metal via MoltenVK)" },
        { label: "存储", value: "应用+模型约500 MB" },
        { label: "依赖", value: "FFmpeg (通过Homebrew安装)" },
      ],
      setupTitle: "快速设置",
      setupSteps: [
        {
          title: "安装FFmpeg",
          description: "打开终端并运行：",
          code: "brew install ffmpeg",
        },
        {
          title: "下载Aniscale",
          description: "下载.app包并将其移至应用程序文件夹。",
          code: null,
        },
        {
          title: "启动并注册",
          description:
            "打开Aniscale，创建账户，开始处理您的动漫视频。",
          code: null,
        },
      ],
    },
    footer: {
      tagline1: "动漫专属AI视频超分辨率。",
      tagline2: "搭载尖端AI引擎。",
      product: "产品",
      features: "特性",
      legal: "法律信息",
      terms: "服务条款",
      privacy: "隐私政策",
      transactions: "特定商业交易法标注",
      copyright: "保留所有权利。",
    },
  },
  ko: {
    nav: {
      home: "홈",
      pricing: "요금",
      download: "다운로드",
      getStarted: "시작하기",
    },
    hero: {
      badge: "macOS 앱 — 로컬에서 처리",
      title1: "애니메이션 전용",
      title2: "AI 영상 업스케일링",
      description:
        "4개의 전용 AI 엔진으로 업스케일링, 노이즈 제거, 프레임 보간을 수행합니다. 모든 처리는 Mac에서 로컬로 수행됩니다.",
      downloadBtn: "macOS용 다운로드",
      pricingBtn: "요금 보기",
      before: "처리 전",
      after: "처리 후",
      lowRes: "저해상도",
      aiEnhanced: "AI 향상",
    },
    features: {
      title1: "4개의 전용",
      title2: "AI 엔진",
      subtitle: "애니메이션 영상 향상의 다양한 측면에 최적화된 처리 엔진",
      items: [
        {
          title: "고정밀 업스케일링",
          description:
            "애니메이션 얼굴과 세밀한 디테일을 유지하면서 2x/3x/4x 초해상도를 실현. 전용 신경망으로 고품질 처리.",
        },
        {
          title: "선화 및 디테일 보존",
          description:
            "애니메이션 특유의 선화와 디테일을 충실히 재현. 보수적 모드와 노이즈 제거 모드로 최대 선명도 달성.",
        },
        {
          title: "다목적 영상 업스케일링",
          description:
            "애니메이션부터 실사까지 다양한 콘텐츠를 처리. 고품질 4배 업스케일링으로 다양한 영상 유형 지원.",
        },
        {
          title: "프레임 보간",
          description:
            "옵티컬 플로우 기반 프레임 보간 기술. 2x/4x FPS 향상으로 부드러운 움직임 구현.",
        },
      ],
    },
    process: {
      title1: "간단한",
      title2: "3단계",
      title3: "워크플로우",
      subtitle:
        "클라우드 업로드 불필요. 대기 시간 없음. 모든 것이 Mac에서 완료됩니다.",
      steps: [
        {
          title: "영상을 드롭",
          description:
            "애니메이션 영상을 Aniscale에 드래그 앤 드롭. 여러 파일 일괄 처리 지원.",
        },
        {
          title: "설정 선택",
          description:
            "5개의 품질 프리셋에서 선택하거나, AI 엔진, 배율, FPS, 후처리 파라미터를 커스터마이즈.",
        },
        {
          title: "놀라운 결과 얻기",
          description:
            "AI가 Vulkan GPU 가속으로 모든 프레임을 로컬 처리. 출력은 다운로드 폴더에 저장.",
        },
      ],
    },
    cta: {
      title: "애니메이션을 업스케일할 준비가 되셨나요?",
      description:
        "Aniscale을 무료로 다운로드하고 AI로 애니메이션 영상을 향상시키세요.",
      downloadBtn: "macOS용 다운로드",
      pricingBtn: "요금 보기",
    },
    pricing: {
      title1: "심플한",
      title2: "포인트제",
      title3: "요금",
      subtitle: "사용한 만큼만 지불. 구독이나 월정액 없음.",
      bestValue: "최고 가성비",
      perPoint: "/ 포인트",
      purchaseBtn: "앱에서 구매",
      starter: "스타터",
      standard: "스탠다드",
      pro: "프로",
      usageTitle: "포인트 사용 가이드",
      usageContent: "콘텐츠",
      usagePoints: "포인트",
      usageNote: "※ 실제 포인트 소비는 영상 복잡도와 설정에 따라 다릅니다.",
      usageItems: [
        { content: "5분 애니메이션 클립 (720p → 4K)", points: "약30pt" },
        { content: "24분 에피소드 (480p → 1080p)", points: "약80pt" },
        { content: "24분 에피소드 (1080p → 4K)", points: "약150pt" },
        {
          content: "프레임 보간 (24fps → 60fps, 24분)",
          points: "약100pt",
        },
      ],
      faqTitle: "자주 묻는 질문",
      faqs: [
        {
          q: "포인트 시스템은 어떻게 작동하나요?",
          a: "포인트는 영상 길이, 해상도, 사용 AI 엔진에 따라 소비됩니다. 미리 포인트를 구매하세요. 포인트는 만료되지 않습니다.",
        },
        {
          q: "구매 전에 체험할 수 있나요?",
          a: "신규 계정에는 보너스 포인트가 지급됩니다. 구매 전에 본인의 영상으로 테스트해 보세요.",
        },
        {
          q: "어떤 결제 수단을 지원하나요?",
          a: "Stripe의 안전한 결제 플랫폼을 통해 주요 신용카드(Visa, Mastercard, AMEX)를 지원합니다.",
        },
        {
          q: "환불이 가능한가요?",
          a: "미사용 포인트는 구매 후 30일 이내에 환불 가능합니다. 고객 지원에 문의하세요.",
        },
      ],
    },
    download: {
      title1: "다운로드",
      title2: "Aniscale",
      subtitle: "무료 다운로드. AI 처리는 포인트제 요금 적용.",
      appTitle: "Aniscale for macOS",
      appBinary: "유니버설 바이너리 (Apple Silicon + Intel)",
      appSize: "macOS 12 이상 · 약 500 MB",
      downloadBtn: ".app 다운로드",
      comingSoon: "곧 출시 — 출시 후 다운로드 링크가 제공됩니다.",
      reqTitle: "시스템 요구사항",
      requirements: [
        { label: "OS", value: "macOS 12 Monterey 이상" },
        { label: "칩", value: "Apple Silicon (M1/M2/M3/M4) 또는 Intel" },
        { label: "RAM", value: "최소 8 GB, 권장 16 GB" },
        { label: "GPU", value: "Vulkan 호환 (Metal via MoltenVK)" },
        { label: "저장공간", value: "앱 + 모델 약 500 MB" },
        { label: "종속성", value: "FFmpeg (Homebrew로 설치)" },
      ],
      setupTitle: "빠른 설정",
      setupSteps: [
        {
          title: "FFmpeg 설치",
          description: "터미널을 열고 실행:",
          code: "brew install ffmpeg",
        },
        {
          title: "Aniscale 다운로드",
          description:
            ".app 번들을 다운로드하고 애플리케이션 폴더로 이동합니다.",
          code: null,
        },
        {
          title: "실행 및 가입",
          description:
            "Aniscale을 열고 계정을 만들어 애니메이션 영상 처리를 시작하세요.",
          code: null,
        },
      ],
    },
    footer: {
      tagline1: "애니메이션 전용 AI 영상 업스케일링.",
      tagline2: "최첨단 AI 엔진 탑재.",
      product: "제품",
      features: "특징",
      legal: "법적 정보",
      terms: "이용약관",
      privacy: "개인정보 처리방침",
      transactions: "특정상거래법 표기",
      copyright: "All rights reserved.",
    },
  },
};

type TranslationsMap = typeof translations;
export type Translations = TranslationsMap[Locale];

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
