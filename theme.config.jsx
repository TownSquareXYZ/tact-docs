import { useRouter } from 'next/router'
import { DocsThemeConfig, LocaleSwitch } from 'nextra-theme-docs'

const PLACEHOLDER_LOCALES = {
  "en-US": "Search documentation",
  fr: "Rechercher documents",
  ru: "Поиск документации",
  "zh-CN": "搜索文档",
};

/**
 * @type {DocsThemeConfig}
 */
const config = {
  logo: (
    <svg width="217" height="30" viewBox="0 0 247 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44.248 9.13488H53.0165V12.1116H50.126V25H47.063V12.1116H44.248V9.13488Z" fill="currentColor" />
      <path d="M62.7724 13.2656H65.7059V25H62.7724V23.7597C62.1971 24.3061 61.6183 24.7016 61.0359 24.946C60.4607 25.1833 59.8352 25.302 59.1593 25.302C57.6422 25.302 56.33 24.716 55.2227 23.544C54.1154 22.3648 53.5618 20.9016 53.5618 19.1544C53.5618 17.3425 54.0974 15.8577 55.1688 14.7001C56.2401 13.5424 57.5415 12.9636 59.073 12.9636C59.7776 12.9636 60.4391 13.0967 61.0575 13.3627C61.6759 13.6287 62.2475 14.0278 62.7724 14.5599V13.2656ZM59.677 15.6815C58.7638 15.6815 58.0053 16.0051 57.4013 16.6522C56.7973 17.2921 56.4953 18.1154 56.4953 19.122C56.4953 20.1358 56.8009 20.9699 57.4121 21.6242C58.0304 22.2785 58.789 22.6056 59.6878 22.6056C60.6153 22.6056 61.3847 22.2857 61.9958 21.6458C62.607 20.9986 62.9126 20.1538 62.9126 19.1112C62.9126 18.0902 62.607 17.2634 61.9958 16.6306C61.3847 15.9979 60.6117 15.6815 59.677 15.6815Z" fill="currentColor" />
      <path d="M79.5063 15.6384L77.0581 16.9865C76.5979 16.5048 76.1413 16.1705 75.6883 15.9835C75.2425 15.7966 74.7177 15.7031 74.1137 15.7031C73.0136 15.7031 72.122 16.0338 71.4389 16.6953C70.7631 17.3496 70.4251 18.1909 70.4251 19.2191C70.4251 20.2185 70.7523 21.0346 71.4066 21.6673C72.0609 22.3001 72.9201 22.6164 73.9843 22.6164C75.3001 22.6164 76.3247 22.1671 77.0581 21.2683L79.3769 22.8537C78.1186 24.4859 76.3426 25.302 74.049 25.302C71.9854 25.302 70.3676 24.6908 69.1956 23.4685C68.0308 22.2461 67.4484 20.8153 67.4484 19.1759C67.4484 18.0399 67.7324 16.9937 68.3004 16.0374C68.8685 15.0811 69.6594 14.3298 70.6732 13.7833C71.6942 13.2369 72.8338 12.9636 74.0921 12.9636C75.2569 12.9636 76.3031 13.1973 77.2306 13.6647C78.1582 14.1249 78.9167 14.7828 79.5063 15.6384Z" fill="currentColor" />
      <path d="M81.8635 8.94074H84.7971V13.2656H86.5443V15.8002H84.7971V25H81.8635V15.8002H80.3536V13.2656H81.8635V8.94074Z" fill="currentColor" />
      <path d="M93.4374 25V9.13488H96.7269C99.0996 9.13488 100.822 9.32542 101.893 9.7065C103.432 10.2458 104.632 11.1805 105.495 12.5107C106.365 13.8408 106.8 15.4263 106.8 17.267C106.8 18.856 106.455 20.2545 105.765 21.4624C105.082 22.6704 104.19 23.5619 103.09 24.1372C101.997 24.7124 100.462 25 98.4849 25H93.4374ZM94.9581 23.5008H96.7916C98.9846 23.5008 100.505 23.3642 101.354 23.091C102.547 22.7027 103.486 22.0053 104.169 20.9986C104.852 19.9848 105.193 18.7481 105.193 17.2885C105.193 15.757 104.823 14.4484 104.082 13.3627C103.342 12.277 102.31 11.5328 100.987 11.1301C99.9948 10.8282 98.3591 10.6772 96.0798 10.6772H94.9581V23.5008Z" fill="currentColor" />
      <path d="M114.076 12.9636C115.881 12.9636 117.376 13.6179 118.563 14.9266C119.641 16.1201 120.18 17.533 120.18 19.1652C120.18 20.8045 119.609 22.239 118.466 23.4685C117.33 24.6908 115.866 25.302 114.076 25.302C112.278 25.302 110.808 24.6908 109.665 23.4685C108.529 22.239 107.961 20.8045 107.961 19.1652C107.961 17.5402 108.5 16.1309 109.579 14.9373C110.765 13.6215 112.264 12.9636 114.076 12.9636ZM114.076 14.4412C112.825 14.4412 111.75 14.905 110.851 15.8325C109.952 16.76 109.503 17.8817 109.503 19.1975C109.503 20.046 109.708 20.8369 110.118 21.5703C110.528 22.3037 111.081 22.8717 111.779 23.2743C112.476 23.6698 113.242 23.8675 114.076 23.8675C114.91 23.8675 115.676 23.6698 116.373 23.2743C117.071 22.8717 117.624 22.3037 118.034 21.5703C118.444 20.8369 118.649 20.046 118.649 19.1975C118.649 17.8817 118.196 16.76 117.29 15.8325C116.391 14.905 115.32 14.4412 114.076 14.4412Z" fill="currentColor" />
      <path d="M133.28 15.7031L132.083 16.4473C131.048 15.074 129.635 14.3873 127.844 14.3873C126.414 14.3873 125.224 14.8475 124.275 15.7678C123.333 16.6881 122.862 17.8062 122.862 19.122C122.862 19.9776 123.077 20.7829 123.509 21.5379C123.947 22.2929 124.544 22.8789 125.299 23.2959C126.061 23.7129 126.913 23.9215 127.855 23.9215C129.581 23.9215 130.99 23.2348 132.083 21.8615L133.28 22.6488C132.719 23.49 131.964 24.1443 131.015 24.6117C130.073 25.0719 128.999 25.302 127.791 25.302C125.935 25.302 124.397 24.7124 123.174 23.5332C121.952 22.354 121.341 20.9196 121.341 19.2299C121.341 18.0938 121.625 17.0405 122.193 16.0698C122.768 15.0919 123.556 14.3298 124.555 13.7833C125.554 13.2369 126.672 12.9636 127.909 12.9636C128.686 12.9636 129.434 13.0823 130.153 13.3196C130.879 13.5568 131.493 13.866 131.997 14.2471C132.5 14.6282 132.928 15.1135 133.28 15.7031Z" fill="currentColor" />
      <path d="M134.894 13.2656H136.414V18.7445C136.414 20.0819 136.486 21.0022 136.63 21.5056C136.846 22.2246 137.256 22.7926 137.86 23.2096C138.471 23.6267 139.197 23.8352 140.038 23.8352C140.88 23.8352 141.591 23.6338 142.174 23.2312C142.763 22.8214 143.17 22.2857 143.392 21.6242C143.543 21.1712 143.619 20.2113 143.619 18.7445V13.2656H145.161V19.025C145.161 20.6427 144.971 21.8615 144.59 22.6811C144.216 23.5008 143.648 24.1443 142.886 24.6117C142.131 25.0719 141.182 25.302 140.038 25.302C138.895 25.302 137.939 25.0719 137.169 24.6117C136.407 24.1443 135.836 23.4972 135.455 22.6704C135.081 21.8363 134.894 20.5852 134.894 18.9171V13.2656Z" fill="currentColor" />
      <path d="M147.411 13.2656H148.91V15.2933C149.435 14.5455 149.974 13.999 150.528 13.6539C151.29 13.1937 152.092 12.9636 152.933 12.9636C153.501 12.9636 154.04 13.0751 154.551 13.298C155.061 13.5209 155.478 13.8193 155.802 14.1932C156.126 14.5599 156.406 15.0883 156.643 15.7786C157.147 14.8582 157.776 14.1608 158.531 13.6863C159.286 13.2045 160.098 12.9636 160.968 12.9636C161.781 12.9636 162.496 13.1686 163.114 13.5784C163.74 13.9882 164.204 14.5599 164.506 15.2933C164.808 16.0267 164.959 17.1267 164.959 18.5935V25H163.416V18.5935C163.416 17.3353 163.327 16.4724 163.147 16.0051C162.967 15.5305 162.658 15.1495 162.219 14.8618C161.788 14.5742 161.27 14.4304 160.666 14.4304C159.933 14.4304 159.26 14.6461 158.649 15.0775C158.045 15.509 157.603 16.0842 157.323 16.8032C157.042 17.5222 156.902 18.723 156.902 20.4055V25H155.403V18.9926C155.403 17.5761 155.313 16.6162 155.133 16.1129C154.961 15.6024 154.655 15.1962 154.217 14.8942C153.778 14.585 153.257 14.4304 152.653 14.4304C151.955 14.4304 151.301 14.6425 150.69 15.0668C150.086 15.4838 149.636 16.0482 149.342 16.76C149.054 17.4719 148.91 18.5612 148.91 20.028V25H147.411V13.2656Z" fill="currentColor" />
      <path d="M176.926 21.1065L178.199 21.7752C177.782 22.5949 177.3 23.2564 176.753 23.7597C176.207 24.263 175.592 24.6477 174.909 24.9137C174.226 25.1725 173.453 25.302 172.59 25.302C170.678 25.302 169.182 24.6764 168.104 23.4253C167.025 22.1671 166.486 20.747 166.486 19.1652C166.486 17.6768 166.942 16.3502 167.856 15.1854C169.013 13.7042 170.563 12.9636 172.504 12.9636C174.503 12.9636 176.099 13.7222 177.293 15.2393C178.141 16.3107 178.573 17.648 178.587 19.2514H168.039C168.068 20.6176 168.503 21.7392 169.344 22.6164C170.185 23.4864 171.224 23.9215 172.461 23.9215C173.058 23.9215 173.636 23.8172 174.197 23.6087C174.765 23.4002 175.247 23.1233 175.643 22.7782C176.038 22.4331 176.466 21.8758 176.926 21.1065ZM176.926 17.9464C176.725 17.1411 176.43 16.4976 176.042 16.0159C175.661 15.5341 175.154 15.1459 174.521 14.8511C173.888 14.5563 173.223 14.4089 172.526 14.4089C171.375 14.4089 170.387 14.7792 169.56 15.5197C168.956 16.059 168.499 16.8679 168.19 17.9464H176.926Z" fill="currentColor" />
      <path d="M180.308 13.2656H181.818V15.3688C182.422 14.5635 183.091 13.9631 183.824 13.5676C184.558 13.165 185.356 12.9636 186.219 12.9636C187.096 12.9636 187.872 13.1865 188.548 13.6323C189.231 14.0781 189.735 14.6785 190.058 15.4335C190.382 16.1884 190.543 17.364 190.543 18.9602V25H189.044V19.4024C189.044 18.0507 188.987 17.1483 188.872 16.6953C188.692 15.9188 188.354 15.3364 187.858 14.9481C187.362 14.5527 186.715 14.3549 185.917 14.3549C185.003 14.3549 184.184 14.6569 183.458 15.2609C182.739 15.8649 182.264 16.6126 182.034 17.5042C181.89 18.0866 181.818 19.1508 181.818 20.6967V25H180.308V13.2656Z" fill="currentColor" />
      <path d="M194.001 8.90839H195.522V13.2656H197.916V14.5599H195.522V25H194.001V14.5599H191.941V13.2656H194.001V8.90839Z" fill="currentColor" />
      <path d="M210.757 13.2656V25H209.269V22.9831C208.636 23.7525 207.924 24.3313 207.133 24.7196C206.35 25.1078 205.49 25.302 204.556 25.302C202.895 25.302 201.475 24.7016 200.295 23.5008C199.123 22.2929 198.537 20.8261 198.537 19.1004C198.537 17.4108 199.131 15.9655 200.317 14.7648C201.503 13.564 202.931 12.9636 204.599 12.9636C205.562 12.9636 206.432 13.1686 207.209 13.5784C207.993 13.9882 208.679 14.603 209.269 15.4227V13.2656H210.757ZM204.717 14.4196C203.876 14.4196 203.1 14.6282 202.388 15.0452C201.676 15.455 201.108 16.0338 200.684 16.7816C200.267 17.5294 200.058 18.3203 200.058 19.1544C200.058 19.9812 200.27 20.7722 200.695 21.5271C201.119 22.2821 201.687 22.8717 202.399 23.2959C203.118 23.7129 203.887 23.9215 204.707 23.9215C205.533 23.9215 206.317 23.7129 207.058 23.2959C207.798 22.8789 208.366 22.3144 208.762 21.6026C209.165 20.8908 209.366 20.0891 209.366 19.1975C209.366 17.8386 208.916 16.7025 208.018 15.7894C207.126 14.8762 206.026 14.4196 204.717 14.4196Z" fill="currentColor" />
      <path d="M214.377 8.90839H215.897V13.2656H218.292V14.5599H215.897V25H214.377V14.5599H212.317V13.2656H214.377V8.90839Z" fill="currentColor" />
      <path d="M219.97 8.43384C220.315 8.43384 220.61 8.55607 220.854 8.80054C221.099 9.045 221.221 9.3398 221.221 9.68493C221.221 10.0229 221.099 10.3141 220.854 10.5585C220.61 10.803 220.315 10.9252 219.97 10.9252C219.632 10.9252 219.341 10.803 219.096 10.5585C218.852 10.3141 218.73 10.0229 218.73 9.68493C218.73 9.3398 218.852 9.045 219.096 8.80054C219.341 8.55607 219.632 8.43384 219.97 8.43384ZM219.215 13.2656H220.736V25H219.215V13.2656Z" fill="currentColor" />
      <path d="M228.313 12.9636C230.118 12.9636 231.614 13.6179 232.8 14.9266C233.879 16.1201 234.418 17.533 234.418 19.1652C234.418 20.8045 233.846 22.239 232.703 23.4685C231.567 24.6908 230.104 25.302 228.313 25.302C226.516 25.302 225.045 24.6908 223.902 23.4685C222.766 22.239 222.198 20.8045 222.198 19.1652C222.198 17.5402 222.737 16.1309 223.816 14.9373C225.002 13.6215 226.501 12.9636 228.313 12.9636ZM228.313 14.4412C227.062 14.4412 225.987 14.905 225.089 15.8325C224.19 16.76 223.74 17.8817 223.74 19.1975C223.74 20.046 223.945 20.8369 224.355 21.5703C224.765 22.3037 225.319 22.8717 226.016 23.2743C226.714 23.6698 227.479 23.8675 228.313 23.8675C229.147 23.8675 229.913 23.6698 230.611 23.2743C231.308 22.8717 231.862 22.3037 232.272 21.5703C232.681 20.8369 232.886 20.046 232.886 19.1975C232.886 17.8817 232.433 16.76 231.527 15.8325C230.629 14.905 229.557 14.4412 228.313 14.4412Z" fill="currentColor" />
      <path d="M236.128 13.2656H237.638V15.3688C238.242 14.5635 238.911 13.9631 239.644 13.5676C240.378 13.165 241.176 12.9636 242.039 12.9636C242.916 12.9636 243.692 13.1865 244.368 13.6323C245.051 14.0781 245.555 14.6785 245.878 15.4335C246.202 16.1884 246.364 17.364 246.364 18.9602V25H244.864V19.4024C244.864 18.0507 244.807 17.1483 244.692 16.6953C244.512 15.9188 244.174 15.3364 243.678 14.9481C243.182 14.5527 242.535 14.3549 241.737 14.3549C240.824 14.3549 240.004 14.6569 239.278 15.2609C238.559 15.8649 238.084 16.6126 237.854 17.5042C237.71 18.0866 237.638 19.1508 237.638 20.6967V25H236.128V13.2656Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2.89671 31.4666L13.5452 19.7152L3.50521 15.7065L28.99 1.0932C26.5378 -2.74133e-09 23.0142 0 17 0C9.73879 0 6.10818 0 3.61017 1.92391C2.97777 2.41098 2.41098 2.97777 1.92391 3.61017C0 6.10818 0 9.73879 0 17C0 24.2612 0 27.8918 1.92391 30.3898C2.21981 30.774 2.54513 31.134 2.89671 31.4666ZM4.39128 32.5948C6.86599 34 10.4607 34 17 34C24.2612 34 27.8918 34 30.3898 32.0761C31.0222 31.589 31.589 31.0222 32.0761 30.3898C34 27.8918 34 24.2612 34 17C34 9.73879 34 6.10818 32.0761 3.61017C31.6542 3.06237 31.1725 2.56381 30.6401 2.12364L20.2292 13.6125L30.807 18.159L4.39128 32.5948Z" fill="currentColor" />
    </svg>
  ),
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  project: {
    link: 'https://github.com/tact-lang/tact-docs',
  },
  docsRepositoryBase: 'https://github.com/tact-lang/tact-docs/edit/main/',
  // i18n: [
  //   { locale: 'en', text: 'English' },
  //   // { locale: 'zh', text: '中文' },
  // ],
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  feedback: {
    content: null
  },
  // editLink: {
  //   text: function useText() {
  //     const { locale } = useRouter()
  //     return {
  //       'en': 'Edit this page on GitHub',
  //       // 'zh': '在 GitHub 上编辑此页',
  //     }[locale ?? "en"]
  //   }
  // },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh-CN", text: "中文" },
    // { locale: "ru", text: "Русский" },
    // { locale: "ko", text: "한국어" },
    // { locale: "pl", text: "Polski" },
    // { locale: "uk", text: "Українська" },
    {
      locale: "HelpTranslate",
      text: (
        <a
          href="https://ton-docs-git-mandarinlocalization-townsquarexyz.vercel.app/contribute/localization-program/overview"
          onClick={(e) => {
            e.stopPropagation();
          }}
          target='_blank'
          style={{
            borderTop: "1px solid #4c4c4c",
            display: "inline-block",
            borderRadius: "0",
            paddingTop: "6px",
          }}
        >
          Help Us Translate
        </a>
      ),
    },
  ],
  search: {
    placeholder: function usePlaceholder() {
      const { locale, defaultLocale = DEFAULT_LOCALE } = useRouter();
      const text =
        (locale && PLACEHOLDER_LOCALES[locale]) ||
        PLACEHOLDER_LOCALES[defaultLocale] ||
        "Search documentation";
      return `${text}…`;
    },
  },
  footer: {
    text: <span>
      CC BY 4.0, Tact Software Foundation
    </span>,
  },
  toc: {
    backToTop: true,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Tact'
    }
  },
  head: () => (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Tact Language Documentation" />
      <meta name="og:title" content="Tact Language Documentation" />
      <meta name="og:description" content="Language reference and guides for Tact" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tact_language" />
      <meta name="apple-mobile-web-app-title" content="Tact" />
      <link rel="icon" href="favicon.png" type="image/x-icon" />

      <script
        lang="javascript"
        dangerouslySetInnerHTML={{
          __html: `if (!window.localStorage.getItem("theme_default")) {
            window.localStorage.setItem("theme", "dark");
            window.localStorage.setItem("theme_default", "dark");
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
          }`,
        }}
      />;
    </>
  ),
  navbar: {
    extraContent: (props) => {
      return (
        <div>
          <LocaleSwitch {...props} />
        </div>
      );
    },
  },
}

export default config
