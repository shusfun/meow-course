import { useEffect, useMemo, useState } from 'react';
import { installTabGroups, tools } from './data';
import { detectPlatform } from './platform';

const assetPath = (name) => `${import.meta.env.BASE_URL}${name}`;

const accentClass = {
  claude: {
    text: 'text-orange-300',
    gradient: 'from-orange-300 to-orange-500',
    border: 'border-orange-400/20',
    bg: 'bg-orange-500/10',
    button: 'bg-orange-400 text-slate-950',
  },
  codex: {
    text: 'text-emerald-300',
    gradient: 'from-emerald-300 to-emerald-500',
    border: 'border-emerald-400/20',
    bg: 'bg-emerald-500/10',
    button: 'bg-emerald-400 text-slate-950',
  },
  ccswitch: {
    text: 'text-sky-300',
    gradient: 'from-sky-300 to-cyan-500',
    border: 'border-sky-400/20',
    bg: 'bg-sky-500/10',
    button: 'bg-sky-400 text-slate-950',
  },
};

const brandLogos = {
  claude: {
    src: assetPath('anthropic-favicon.png'),
    alt: 'Anthropic logo',
  },
  codex: {
    src: assetPath('openai-logo.png'),
    alt: 'OpenAI logo',
  },
  ccswitch: {
    src: assetPath('cc-switch-icon.png'),
    alt: 'CC Switch logo',
  },
};

function formatDate(value) {
  if (!value) return '';
  return new Intl.DateTimeFormat('zh-CN').format(new Date(value));
}

function App() {
  const [activeKey, setActiveKey] = useState('claude');
  const [platform] = useState(() => detectPlatform());
  const activeTool = tools.find((tool) => tool.key === activeKey) ?? tools[0];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-200">
      <BackgroundGlow />
      <SiteHeader />
      <main className="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <HeroTabs activeKey={activeKey} onChange={setActiveKey} />
        <ToolGuide key={activeKey} tool={activeTool} platform={platform} />
      </main>
      <SiteFooter />
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[400px]">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-purple-900/10 to-transparent" />
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-indigo-600/5 blur-3xl" />
      <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-purple-600/5 blur-3xl" />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0e1a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-4 sm:px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-xl shadow-lg shadow-indigo-500/20">
          🐱
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white">shus~肺雾喵~</h1>
          <p className="hidden text-xs text-gray-500 sm:block">就你还需要教程喵？</p>
        </div>
      </div>
    </header>
  );
}

function HeroTabs({ activeKey, onChange }) {
  return (
    <>
      <section className="mb-10 text-center">
        <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
          就三步，
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            不会的话建议转行喵
          </span>
        </h2>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
          选一个吧，本喵不想解释第二遍 🐾
        </p>
      </section>

      <div className="mb-10 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 rounded-xl border border-white/5 bg-[#151d35]/50 p-1.5">
          {tools.map((tool) => {
            const active = tool.key === activeKey;
            const accent = accentClass[tool.accent];
            return (
              <button
                key={tool.key}
                type="button"
                onClick={() => onChange(tool.key)}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                  active
                    ? `${accent.button} shadow-lg`
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <BrandLogo toolKey={tool.key} className="h-5 w-5" />
                  <span>{tool.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

function ToolGuide({ tool, platform }) {
  const accent = accentClass[tool.accent];

  return (
    <section className="animate-fade-in space-y-6">
      <div className="mb-10 text-center">
        <div className="mb-3 flex flex-wrap items-center justify-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${accent.border} ${accent.bg}`}>
            <BrandLogo toolKey={tool.key} className="h-7 w-7" />
          </div>
          <h2
            className={`bg-gradient-to-r ${accent.gradient} bg-clip-text text-3xl font-bold text-transparent md:text-4xl`}
          >
            {tool.title}
          </h2>
        </div>
        <p className="mx-auto max-w-2xl text-sm text-gray-400 md:text-base">{tool.subtitle}</p>
        <p className="mt-2 text-xs text-gray-600">
          {platform.emoji} 本喵看到你用的是{' '}
          <span className="text-gray-400">{platform.label}</span>
        </p>
      </div>

      {tool.steps.map((step, index) => (
        <GuideStep
          key={`${tool.key}-${step.title}`}
          stepNumber={index + 1}
          step={step}
          tool={tool}
          platform={platform}
        />
      ))}
    </section>
  );
}

function BrandLogo({ toolKey, className = 'h-5 w-5' }) {
  const logo = brandLogos[toolKey];

  if (!logo) return null;

  return (
    <img
      src={logo.src}
      alt={logo.alt}
      className={`${className} shrink-0 rounded-sm bg-white/90 object-contain p-0.5`}
      draggable="false"
    />
  );
}

function GuideStep({ stepNumber, step, tool, platform }) {
  const accent = accentClass[tool.accent];

  return (
    <article className="glass-card p-5 md:p-8">
      <div className="mb-4 flex items-start gap-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${accent.border} ${accent.bg} text-sm font-bold ${accent.text}`}
        >
          {stepNumber}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold text-white md:text-2xl">{step.title}</h3>
        </div>
      </div>

      <div className="ml-0 space-y-4 text-sm leading-relaxed text-gray-300 sm:ml-14">
        {step.body?.map((text) => (
          <p key={text}>{text}</p>
        ))}
        {step.installTabs && (
          <InstallTabs
            tabs={installTabGroups[step.installTabs] ?? []}
            platform={platform}
            accent={tool.accent}
          />
        )}
        {step.list && <PlainList items={step.list} />}
        {step.links && <LinkList links={step.links} accent={tool.accent} />}
        {step.commandBlocks?.map((block) => (
          <div key={`${block.title ?? ''}-${block.code}`}>
            {block.title && <h4 className="mb-2 text-sm font-medium text-white">{block.title}</h4>}
            <CodeBlock language={block.language} code={block.code} />
          </div>
        ))}
        {step.features && <FeatureList title={step.featuresTitle} features={step.features} />}
        {step.troubles && <TroubleList troubles={step.troubles} />}
        {step.warning && <WarningLink warning={step.warning} />}
        {step.note && <WarningText>{step.note}</WarningText>}
      </div>
    </article>
  );
}

function InstallTabs({ tabs, platform, accent }) {
  const availableTabs = useMemo(() => {
    if (!tabs.length) return [];
    return [...tabs].sort((left, right) => {
      const leftMatches = left.platforms?.includes(platform.key) ? 0 : 1;
      const rightMatches = right.platforms?.includes(platform.key) ? 0 : 1;
      return leftMatches - rightMatches;
    });
  }, [platform.key, tabs]);
  const [activeId, setActiveId] = useState(() => availableTabs[0]?.id ?? '');

  useEffect(() => {
    setActiveId(availableTabs[0]?.id ?? '');
  }, [availableTabs]);

  const activeTab = availableTabs.find((tab) => tab.id === activeId) ?? availableTabs[0];

  if (!activeTab) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-white/5 bg-[#0f1629]/60">
      <div className="flex flex-wrap gap-2 border-b border-white/5 p-2">
        {availableTabs.map((tab) => {
          const active = tab.id === activeTab.id;
          return (
            <button
              key={tab.id}
              type="button"
              className={`rounded-lg px-3 py-2 text-xs font-medium transition ${
                active
                  ? `${accentClass[accent].button} shadow-lg`
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
              onClick={() => setActiveId(tab.id)}
            >
              <span className="flex items-center gap-2">
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${
                      active ? 'bg-slate-950/15 text-slate-950' : 'bg-white/5 text-gray-500'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
      <div className="space-y-3 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-gray-300">{activeTab.description}</p>
          <a
            className={`${accentClass[accent].text} shrink-0 text-xs underline underline-offset-2`}
            href={activeTab.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            {activeTab.sourceLabel ?? '官方来源'}
          </a>
        </div>
        {activeTab.deprecated && (
          <WarningText>{activeTab.note ?? '官方已不推荐这个方式，除非你明确知道自己要这么装喵。'}</WarningText>
        )}
        <CodeBlock language={activeTab.language} code={activeTab.code} />
      </div>
    </div>
  );
}

function LinkList({ links, accent }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.href}
          className={`rounded-lg border ${accentClass[accent].border} ${accentClass[accent].bg} px-4 py-2 text-sm font-medium ${accentClass[accent].text} transition hover:bg-white/5`}
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function PlainList({ items }) {
  return (
    <ol className="list-inside list-decimal space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}

function FeatureList({ title, features }) {
  return (
    <div className="rounded-lg border border-white/5 bg-[#0f1629]/60 p-4">
      {title && <h4 className="mb-3 text-sm font-medium text-white">{title}</h4>}
      <ul className="list-inside list-disc space-y-1.5">
        {features.map(([name, description]) => (
          <li key={name}>
            <strong className="text-white">{name}</strong> — {description}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TroubleList({ troubles }) {
  return (
    <div className="space-y-4">
      {troubles.map((item) => (
        <div key={item.title}>
          <h4 className="mb-2 text-sm font-medium text-white">🔧 {item.title}</h4>
          {item.body && <p className="mb-2">{item.body}</p>}
          {item.code && <CodeBlock language={item.language ?? 'bash'} code={item.code} />}
        </div>
      ))}
    </div>
  );
}

function WarningLink({ warning }) {
  return (
    <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-3 text-xs text-yellow-200/80">
      {warning.text.split(warning.label)[0]}
      <a
        className="text-yellow-300 underline underline-offset-2"
        href={warning.href}
        target="_blank"
        rel="noreferrer"
      >
        {warning.label}
      </a>
      {warning.text.split(warning.label)[1]}
    </div>
  );
}

function WarningText({ children }) {
  return (
    <p className="mt-3 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-3 text-xs text-yellow-200/80">
      {children}
    </p>
  );
}

function CodeBlock({ language, code }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-white/5 bg-[#070b14]">
      <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
          {language}
        </span>
        <button
          type="button"
          className="rounded px-2.5 py-1 text-xs text-gray-400 transition hover:bg-white/5 hover:text-white"
          onClick={copy}
          aria-label="复制代码"
        >
          {copied ? '已复制' : '复制'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-gray-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#0a0e1a]/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-gray-500 sm:flex-row sm:px-6">
        <p>shus~肺雾喵~ · 嫌弃你但还是帮了你喵 🐾</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="https://code.claude.com/docs/en/setup" target="_blank" rel="noreferrer" className="hover:text-white">
            Claude 文档
          </a>
          <a href="https://developers.openai.com/codex" target="_blank" rel="noreferrer" className="hover:text-white">
            Codex 文档
          </a>
          <a href="https://course.waasabi.cloud/" target="_blank" rel="noreferrer" className="hover:text-white">
            CC Switch
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;
