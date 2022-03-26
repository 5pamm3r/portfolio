const createImg = (url, desc) => {
    const img = document.createElement('img')
    img.src = url;
    img.title = desc
    img.alt = `logo ${desc}`

    return img
}

const skillsImg = (link, desc) => {
    const div = document.createElement('div')    
    div.append(createImg(link, desc))

    return div
}

export { skillsImg } 