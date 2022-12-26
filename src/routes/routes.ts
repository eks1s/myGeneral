export enum EAllRoutes {
  MAIN = "/",
  ABOUT = "about",
}

export const allRoutesArray: Array<{ to: EAllRoutes; name: string }> = [
  {
    to: EAllRoutes.MAIN,
    name: "Main",
  },
  {
    to: EAllRoutes.ABOUT,
    name: "About",
  },
];

export const componentsRoutes = [
  { to: "/some-component1", name: "Component1" },
  { to: "/some-component2", name: "Component2" },
  { to: "/some-component3", name: "Component3" },
  { to: "/some-component4", name: "Component4" },
  { to: "/some-component5", name: "Component5" },
  { to: "/some-component6", name: "Component6" },
  { to: "/some-component7", name: "Component7" },
];
