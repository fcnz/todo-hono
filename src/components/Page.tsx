export type PageProps = { children: any };
export const Page = ({ children }: PageProps) => (
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>TODO HTMX</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
      {children}
      <script
        src="https://unpkg.com/htmx.org@1.9.9"
        integrity="sha384-QFjmbokDn2DjBjq+fM+8LUIVrAgqcNW2s0PjAxHETgRn9l4fvX31ZxDxvwQnyMOX"
        crossorigin="anonymous"
      ></script>
      <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
    </body>
  </html>
);
