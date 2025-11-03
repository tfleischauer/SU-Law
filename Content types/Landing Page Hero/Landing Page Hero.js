<section class="hero hero--landing text-margin-reset hero--img{{#ifSet "BG Video URL"}} hero--video{{/ifSet}}">
  <div class="hero__media">
    {{#ifSet "BG Video URL"}}
      <div class="autoplay-video-container">
        <video class="video" aria-labelledby="hero-video--button-toggle" id="hero" loop muted playsinline>
          <source src="{{field "BG Video URL"}}" type="video/mp4" />
        </video>
        <button
          type="button"
          class="video-play-button"
          data-button-open-text=""
          data-button-close-text=""
          data-button-enable-at="0"
          data-button-disable-at="-1"
          data-button-open-class="video-playing"
          data-button-open-class-element=".autoplay-video-container"
          aria-live="polite"
          aria-label="Pause"
          id="hero-video--button-toggle"
          aria-controls="hero"
          data-toggle-type="toggle"
          aria-pressed="false">
        </button>
      </div>
    {{/ifSet}}

    {{!-- Responsive background image --}}
    <img
      loading="eager"
      sizes="100vw"
      src="{{publish element="BG Image" format="url" filter=4 cdn=true}}"
      srcset="{{publish element="BG Image" format="url" filter=4 cdn=true}} 500w,
              {{publish element="BG Image" format="url" filter=3 cdn=true}} 768w,
              {{publish element="BG Image" format="url" filter=2 cdn=true}} 1600w,
              {{publish element="BG Image" format="url" filter=1 cdn=true}} 1900w"
      alt="{{alt element="BG Image" fallback=(field "Title")}}">
  </div>

  <div class="hero__overlay" aria-hidden="true"></div>

  <div class="hero__content">
    <h1>{{text "Title" stripTags=true}}</h1>

    <div class="global-spacing--3x">
      <p>{{text "Description" stripTags=true}}</p>
    </div>

    <div class="global-spacing--3x">
      {{#ifSet "Show Breadcrumbs"}}
        {{embed layout="Breadcrumbs" id=955}}
      {{/ifSet}}
    </div>

    {{#ifSet "CTA - Title"}}
      <div class="global-spacing--3x">
        {{!-- Prefer internal; fall back to external --}}
        {{#ifSet "CTA - Internal Link"}}
          <a class="btn" href="{{linkurl "CTA - Internal Link" navSections=true}}">{{text "CTA - Title" stripTags=true}}</a>
        {{else ifSet "CTA - External Link"}}
          <a class="btn" href="{{field "CTA - External Link"}}">{{text "CTA - Title" stripTags=true}}</a>
        {{/ifSet}}
      </div>
    {{/ifSet}}
  </div>
</section>
