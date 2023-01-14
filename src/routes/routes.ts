export enum EAllRoutes {
    MAIN = "/",
    ABOUT = "about",
    COMPONENT1 = "component1",
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
    {
        to: EAllRoutes.COMPONENT1,
        name: "component1",
    },
];

export const componentsRoutes = [
    { to: "/component1", name: "Checkbox select" },
    { to: "/some-component2", name: "Component2" },
    { to: "/some-component3", name: "Component3" },
    { to: "/some-component4", name: "Component4" },
    { to: "/some-component5", name: "Component5" },
    { to: "/some-component6", name: "Component6" },
    { to: "/some-component7", name: "Component7" },
];
