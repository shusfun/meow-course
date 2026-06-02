export function detectPlatform() {
  const ua = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();

  if (ua.includes('windows') || platform.includes('win')) {
    return {
      key: 'windows',
      label: 'Windows',
      emoji: '🪟',
      shell: 'PowerShell',
      shellLanguage: 'powershell',
      assetMatchers: [/windows/i, /\.msi$/i, /portable\.zip$/i],
    };
  }

  if (ua.includes('mac') || platform.includes('mac')) {
    return {
      key: 'mac',
      label: 'macOS',
      emoji: '🍎',
      shell: 'Terminal',
      shellLanguage: 'bash',
      assetMatchers: [/mac/i, /darwin/i, /\.dmg$/i, /\.app\.tar\.gz$/i],
    };
  }

  if (ua.includes('linux') || platform.includes('linux')) {
    return {
      key: 'linux',
      label: 'Linux',
      emoji: '🐧',
      shell: 'Terminal',
      shellLanguage: 'bash',
      assetMatchers: [/linux/i, /\.appimage$/i, /\.deb$/i, /\.rpm$/i],
    };
  }

  return {
    key: 'unknown',
    label: '未知系统',
    emoji: '💻',
    shell: 'Terminal',
    shellLanguage: 'bash',
    assetMatchers: [],
  };
}

export function matchesPlatformAsset(assetName, platform) {
  if (!platform.assetMatchers.length) return true;
  return platform.assetMatchers.some((matcher) => matcher.test(assetName));
}
