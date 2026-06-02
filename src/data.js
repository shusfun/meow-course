export const tools = [
  {
    key: 'ccswitch',
    label: 'CC Switch',
    accent: 'ccswitch',
    title: 'CC Switch',
    subtitle: '先把 CC Switch 装好，Sub2API 的“导入到 CC Switch”按钮才拉得起来喵',
    docsUrl: 'https://ccswitch.io',
    steps: [
      {
        title: '下载安装 CC Switch 喵',
        body: [
          '先走不翻墙路线：打开 CC Switch 中文官网，从下载按钮拿安装包。',
          '如果官网最后还是跳到 GitHub 且你打不开，就用 GitHub 加速器打开官方 Releases 链接。能访问外网的人再用 GitHub/Homebrew/paru。',
        ],
        installTabs: 'ccswitch',
      },
      {
        title: '打开一次 CC Switch 喵',
        body: [
          '装完先打开一次，让系统注册 ccswitch://。这一步做好以后，Sub2API 的“导入到 CC Switch”按钮才能直接拉起它。',
        ],
        list: [
          '安装完成后启动 CC Switch',
          '如果系统弹协议确认，允许浏览器打开 CC Switch',
          '再回 Sub2API 密钥列表点“导入到 CC Switch”',
        ],
      },
      {
        title: '然后回 Sub2API 导入喵',
        body: ['CC Switch 只负责接住 Sub2API 给过来的密钥和接口地址。导入完成后，Claude 直接用，Codex 重启后用。'],
        featuresTitle: '生效方式就这两条喵',
        features: [
          ['Claude Code', '启用接口后通常直接运行 claude'],
          ['Codex CLI', '启用接口后先退出当前 Codex，再重新运行 codex'],
        ],
      },
      {
        title: '你可能会踩的坑喵',
        troubles: [
          {
            title: '点导入没反应',
            body: '先打开一次 CC Switch；还是没反应就重装 CC Switch，让 ccswitch:// 协议重新注册。',
          },
          {
            title: '不知道下载哪个包',
            body: 'Windows 优先 .msi；macOS 优先 .dmg；Linux 先看自己系统能不能装 .deb 或 .rpm，不行再用 AppImage。',
          },
        ],
      },
    ],
  },
  {
    key: 'claude',
    label: 'Claude Code',
    accent: 'claude',
    title: 'Claude Code',
    subtitle: '装好 Claude Code，把 Sub2API 的密钥一键导入 CC Switch，然后直接开 claude 喵',
    docsUrl: 'https://code.claude.com/docs/en/setup',
    steps: [
      {
        title: '先按官方方式装 Claude Code 喵',
        body: ['Claude Code 先用官方方式装好。npm 还能用，但 Anthropic 已经标成不推荐，所以只当备用。'],
        installTabs: 'claude',
      },
      {
        title: '从 Sub2API 一键导入到 CC Switch 喵',
        body: [
          '打开 Sub2API 的密钥列表，找到你要用的那条密钥，点“导入到 CC Switch”。',
          '浏览器会拉起 CC Switch，CC Switch 会显示导入确认；你确认后，这条密钥和接口地址就会进 CC Switch。',
        ],
        list: [
          'Sub2API 里点“导入到 CC Switch”',
          'CC Switch 弹出导入确认',
          '确认导入',
          '在 CC Switch 里启用这条 Claude Code 接口',
        ],
        featuresTitle: 'Sub2API 快速导入会带上这些东西喵',
        features: [
          ['密钥', '就是 Sub2API 分给你的 sk-xxx'],
          ['接口地址', '就是这条密钥对应的 Sub2API 地址'],
          ['用量查询', 'Sub2API 会给 CC Switch 带上用量查询配置'],
        ],
        note: '如果点了没反应，通常是 CC Switch 没装好，或者 ccswitch:// 协议没有注册。那就先打开一次 CC Switch，再回 Sub2API 点导入。',
      },
      {
        title: '直接启动 Claude Code 喵',
        body: ['Claude Code 在 CC Switch 里切换后通常会直接生效。进项目目录运行 claude 就行，不用把事情想复杂。'],
        commandBlocks: [
          {
            title: '启动 Claude Code',
            language: 'powershell',
            code: 'cd C:\\path\\to\\your\\project\nclaude',
          },
        ],
      },
      {
        title: '你可能会踩的坑喵',
        troubles: [
          {
            title: 'Sub2API 里没有导入按钮',
            body: '先确认你看的是真正的密钥列表，不是后台别的页面。有些站点也可能把按钮隐藏了。',
          },
          {
            title: '点导入没有拉起 CC Switch',
            body: '先确认本机装了 CC Switch，并且 ccswitch:// 能被系统识别。识别不了就重新打开或重装 CC Switch。',
          },
          {
            title: 'Claude Code 还是没走新接口',
            body: '回 CC Switch 看这条 Claude Code 接口是不是已经启用。还不行就关掉当前 claude，再重新进项目运行一次。',
          },
        ],
      },
    ],
  },
  {
    key: 'codex',
    label: 'Codex CLI',
    accent: 'codex',
    title: 'Codex CLI',
    subtitle: '装好 Codex，把 Sub2API 的 Codex 密钥导入 CC Switch，然后重启 codex 喵',
    docsUrl: 'https://developers.openai.com/codex',
    steps: [
      {
        title: '先装 Codex CLI 喵',
        body: ['Codex CLI 先按官方方式装好。教程里的 npm 是工具安装方式，不代表这个项目改回 npm。'],
        installTabs: 'codex',
      },
      {
        title: '从 Sub2API 一键导入到 CC Switch 喵',
        body: [
          '在 Sub2API 的密钥列表里，找到 Codex 那条密钥，点“导入到 CC Switch”。',
          'Sub2API 会用 ccswitch:// 把密钥、接口地址和默认模型交给 CC Switch；你只要确认导入。',
        ],
        list: [
          'Sub2API 里点“导入到 CC Switch”',
          'CC Switch 弹出导入确认',
          '确认导入',
          '在 CC Switch 里启用这条 Codex 接口',
        ],
        featuresTitle: '怎么判断导到 Codex 了喵',
        features: [
          ['OpenAI/Codex 分组密钥', 'Sub2API 会导入到 CC Switch 的 Codex'],
          ['普通 Claude 分组密钥', '会导入到 Claude Code'],
          ['Antigravity 分组密钥', 'Sub2API 会让你选 Claude Code 或 Gemini CLI'],
        ],
        note: '如果你拿到的是 Codex 用的 Sub2API 密钥，就从 Sub2API 直接导入；不用手写任何配置文件。',
      },
      {
        title: '重启 Codex，然后用 codex 喵',
        body: [
          'Codex 读取配置没 Claude 那么勤快。CC Switch 里启用接口后，把正在跑的 Codex 关掉，再重新打开。',
          '重新打开后，Codex 才会读到 CC Switch 写进去的新接口和模型配置。',
        ],
        commandBlocks: [
          {
            title: '重新启动 Codex',
            language: 'bash',
            code: 'codex',
          },
          {
            title: '需要桌面入口就这样开',
            language: 'bash',
            code: 'codex app',
          },
        ],
      },
      {
        title: '你可能会踩的坑喵',
        troubles: [
          {
            title: '导入后 Codex 没变化',
            body: '先退出当前 Codex，再重新运行 codex。Codex 常见就是要重启 CLI 才吃新配置。',
          },
          {
            title: '导入到了 Claude Code，不是 Codex',
            body: '看 Sub2API 里这条密钥属于什么分组。OpenAI/Codex 分组会导到 Codex，普通 Claude 分组会导到 Claude Code。',
          },
          {
            title: '点导入没有打开 CC Switch',
            body: '说明 ccswitch:// 没被系统接住。先确认 CC Switch 已安装并打开过，再回 Sub2API 点导入。',
          },
        ],
      },
    ],
  },
];

export const installTabGroups = {
  claude: [
    {
      id: 'windows-script',
      label: 'Windows 脚本',
      badge: '官方推荐',
      platforms: ['windows'],
      description: 'Windows 上优先用官方 PowerShell 安装脚本，复制后在 PowerShell 里运行。',
      language: 'powershell',
      code: 'irm https://claude.ai/install.ps1 | iex',
      sourceUrl: 'https://code.claude.com/docs/en/setup',
    },
    {
      id: 'winget',
      label: 'WinGet',
      badge: 'Windows',
      platforms: ['windows'],
      description: '已经习惯 WinGet 的话，也可以用官方列出的包名安装。',
      language: 'powershell',
      code: 'winget install Anthropic.ClaudeCode',
      sourceUrl: 'https://code.claude.com/docs/en/setup',
    },
    {
      id: 'unix-script',
      label: 'macOS/Linux 脚本',
      badge: '官方推荐',
      platforms: ['mac', 'linux', 'unknown'],
      description: 'macOS 或 Linux 上优先用官方安装脚本。',
      language: 'bash',
      code: 'curl -fsSL https://claude.ai/install.sh | bash',
      sourceUrl: 'https://code.claude.com/docs/en/setup',
    },
    {
      id: 'homebrew',
      label: 'Homebrew',
      badge: 'macOS/Linux',
      platforms: ['mac', 'linux'],
      description: '如果你的机器已经有 Homebrew，用这个方式也很顺手。',
      language: 'bash',
      code: 'brew install --cask claude-code',
      sourceUrl: 'https://code.claude.com/docs/en/setup',
    },
    {
      id: 'npm',
      label: 'npm',
      badge: '备用',
      platforms: ['windows', 'mac', 'linux', 'unknown'],
      description: 'npm 方式还能用，但 Claude Code 官方 README 已明确标为 deprecated。',
      language: 'bash',
      code: 'npm install -g @anthropic-ai/claude-code',
      note: '官方已不推荐。能用官方脚本或 WinGet/Homebrew，就别优先选 npm 喵。',
      deprecated: true,
      sourceUrl: 'https://code.claude.com/docs/en/setup',
    },
  ],
  codex: [
    {
      id: 'windows-script',
      label: 'Windows 脚本',
      badge: '官方推荐',
      platforms: ['windows'],
      description: 'Windows 上用官方 PowerShell 安装脚本。',
      language: 'powershell',
      code: 'powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"',
      sourceUrl: 'https://developers.openai.com/codex',
    },
    {
      id: 'unix-script',
      label: 'macOS/Linux 脚本',
      badge: '官方推荐',
      platforms: ['mac', 'linux', 'unknown'],
      description: 'macOS 或 Linux 上用官方安装脚本。',
      language: 'bash',
      code: 'curl -fsSL https://chatgpt.com/codex/install.sh | sh',
      sourceUrl: 'https://developers.openai.com/codex',
    },
    {
      id: 'npm',
      label: 'npm',
      badge: '包管理器',
      platforms: ['windows', 'mac', 'linux', 'unknown'],
      description: 'Codex CLI 官方也支持 npm 全局安装。',
      language: 'bash',
      code: 'npm install -g @openai/codex',
      sourceUrl: 'https://developers.openai.com/codex',
    },
    {
      id: 'homebrew',
      label: 'Homebrew',
      badge: 'macOS',
      platforms: ['mac'],
      description: 'macOS 上可以用 Homebrew cask 安装。',
      language: 'bash',
      code: 'brew install --cask codex',
      sourceUrl: 'https://developers.openai.com/codex',
    },
  ],
  ccswitch: [
    {
      id: 'official-cn',
      label: '中文官网',
      badge: '不翻墙优先',
      platforms: ['windows', 'mac', 'linux', 'unknown'],
      description: '先打开 CC Switch 中文官网。官网是原作者 README 标注的唯一官网，国内网络通常比 GitHub 更容易打开。',
      language: 'text',
      code: 'https://ccswitch.io/zh/',
      sourceUrl: 'https://ccswitch.io/zh/',
      sourceLabel: '中文官网',
    },
    {
      id: 'ghproxy',
      label: 'GitHub 加速',
      badge: '不翻墙备用',
      platforms: ['windows', 'mac', 'linux', 'unknown'],
      description: '如果官网下载按钮跳 GitHub 但打不开，用加速器打开官方 Releases 链接，再按系统下载对应包。',
      language: 'text',
      code: 'https://ghproxy.vip/https://github.com/farion1231/cc-switch/releases/latest',
      sourceUrl: 'https://ghproxy.vip/https://github.com/farion1231/cc-switch/releases/latest',
      sourceLabel: '加速入口',
    },
    {
      id: 'windows-msi',
      label: 'Windows 官方',
      badge: '外网备用',
      platforms: ['windows'],
      description: '能访问 GitHub 的 Windows 用户，去最新发布页下载 CC-Switch-v{version}-Windows.msi 安装包。',
      language: 'text',
      code: 'https://github.com/farion1231/cc-switch/releases/latest',
      sourceUrl: 'https://github.com/farion1231/cc-switch/releases/latest',
    },
    {
      id: 'mac-homebrew',
      label: 'macOS Homebrew',
      badge: '外网备用',
      platforms: ['mac'],
      description: '能正常访问 Homebrew 的 macOS 用户，用 cask 安装最省事；国内网络不稳时优先走中文官网下载 dmg。',
      language: 'bash',
      code: 'brew install --cask cc-switch',
      sourceUrl: 'https://github.com/farion1231/cc-switch',
    },
    {
      id: 'mac-dmg',
      label: 'macOS 官方',
      badge: '外网备用',
      platforms: ['mac'],
      description: '能访问 GitHub 的 macOS 用户，去最新发布页下载 macOS.dmg。原作者 README 说明 macOS 版本已签名和公证。',
      language: 'text',
      code: 'https://github.com/farion1231/cc-switch/releases/latest',
      sourceUrl: 'https://github.com/farion1231/cc-switch/releases/latest',
    },
    {
      id: 'arch',
      label: 'Arch Linux',
      badge: '外网备用',
      platforms: ['linux'],
      description: '能正常访问 AUR 的 Arch Linux 用户可以通过 paru 安装 cc-switch-bin。',
      language: 'bash',
      code: 'paru -S cc-switch-bin',
      sourceUrl: 'https://github.com/farion1231/cc-switch',
    },
    {
      id: 'linux-release',
      label: 'Linux 官方',
      badge: '外网备用',
      platforms: ['linux', 'unknown'],
      description: '能访问 GitHub 的 Linux 用户，去最新发布页按系统选择 .deb、.rpm 或 AppImage。',
      language: 'text',
      code: 'https://github.com/farion1231/cc-switch/releases/latest',
      sourceUrl: 'https://github.com/farion1231/cc-switch/releases/latest',
    },
  ],
};

export const ccSwitchRepo = 'farion1231/cc-switch';
export const sub2apiRepo = 'Wei-Shaw/sub2api';
