# Static website source for www.edsh.de

To see how to get involved, check the [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Note to self to swap out special-occasion-microsites

1. `content/_index.html`: change `title` to event's name, increase menu.main.weight to e.g. 50

2. add a `content/home.html` that will serve as the "original" page:
    ```html
    ---
    title: "Home"
    linkTitle: "Start"
    layout: home-normal
    menu:
    "main":
    weight: "10"
    ---
    ```
3. copy the current home "original" home page:
   ```bash
   git mv layouts/_default/home.html layouts/_default/home-normal.html
   ```
   
4. Add the microsite's content to `layouts/_default/home.html`.
