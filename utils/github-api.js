
/**
 * Get a gist from Github API by gist ID
 * @param {47a1b798d70135cfc095580459f80ac5} gistId 
 * @returns 
 */
const getGistById = async (gistId) => {
    const response = await fetch('https://api.github.com/gists/' + gistId)
    return response.json()
}

module.exports = {
    getGistById
}