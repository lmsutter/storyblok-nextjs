import { storyblokEditable } from "@storyblok/react"


const Header = ({ blok }: { blok: any }) => {
    return (
        <div {...storyblokEditable(blok)}>{blok.title}</div>
    )
}

export default Header;