export const menus = [
    { id: 1, name: "Home", link: "#", icon: "fa-solid fa-house" },
    { id: 2, name: "Discover", link: "#", icon: "fa-regular fa-compass", children: [
        { id: 1, name: "Places", link: "#", icon: "fa-solid fa-location-dot" },
        { id: 2, name: "Events", link: "#", icon: "fa-solid fa-calendar-days" },
        { id: 3, name: "Experiences", link: "#", icon: "fa-solid fa-otter" },
    ] },
    { id: 3, name: "Guides", link: "#", icon: "fa-regular fa-map" },
]

export const profileMenus = [
    { id: 1, name: "Sign up", link: "#", icon: "fa-solid fa-user-plus" },
    { id: 2, name: "Sign in", link: "#", icon: "fa-solid fa-right-to-bracket" },
    { id: 3, name: "Download the app", link: "#", icon: "fa-regular fa-circle-down" },
]


export const footerMenus = [
    { id: 1, title: "Company", children: [
        { id: 1, name: "About Us", link: "#" },
        { id: 2, name: "Carrers", link: "#" },
        { id: 3, name: "Blog", link: "#" },
        { id: 4, name: "Badges", link: "#" },
    ]},
    { id: 2, title: "Legal", children: [
        { id: 1, name: "Privacy Policy", link: "#" },
        { id: 2, name: "Tersm of Use", link: "#" },
        { id: 3, name: "EULA", link: "#" },
        { id: 4, name: "Ticketing Policy", link: "#" },
    ]},
    { id: 3, title: "Contact Us", children: [
        { id: 1, name: "info@zormor.com", link: "#" },
        { id: 2, name: "(+44) 07864 572216", link: "#" },
    ]},
]

export const socialMedias = [
    {id: 1, link: "#", icon: "fa-brands fa-facebook"},
    {id: 2, link: "#", icon: "fa-brands fa-x-twitter"},
    {id: 3, link: "#", icon: "fa-brands fa-instagram"},
    {id: 4, link: "#", icon: "fa-brands fa-linkedin"},
]