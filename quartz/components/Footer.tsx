import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <>
        <script
          src="https://giscus.app/client.js"
          data-repo="blog-chain/.giscus"
          data-repo-id="R_kgDOMebB2Q"
          data-category="Announcements"
          data-category-id="DIC_kwDOMebB2c4ChW-y"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="top"
          data-theme="dark_high_contrast"
          data-lang="ko"
          crossorigin="anonymous"
          async
        ></script>
        <footer class={`${displayClass ?? ""}`}>
          <p>
            {i18n(cfg.locale).components.footer.createdWith}{" "}
            <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
          </p>
          <ul>
            {Object.entries(links).map(([text, link]) => (
              <li>
                <a href={link}>{text}</a>
              </li>
            ))}
          </ul>
        </footer>
      </>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
