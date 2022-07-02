import dotenv from "dotenv"

const mainController = (req, res) => {
    const config = dotenv.config().parsed
    const siteName = config.SITE_NAME;
    const authorName = config.AUTHOR_NAME;
    const authorReference = config.AUTHOR_REFERENCE;
    const siteData = {
        siteName,
        author: {
            authorName,
            authorReference
        }
    }
    res.json(siteData)
}


export default mainController