async function GetPost() {
    let id = new URL(document.URL).searchParams.get('id')
    console.log(id)

    const resp = await fetch(`http://localhost:8080/post?id=${id}`, {
        method: 'GET'
    }).then(resp => resp.json()).then(data => {
        let results_pre_str = data
        const results = JSON.parse(results_pre_str)
        console.log(results)
        const source = results.posts[0].file_url
        console.log(source)
        if (source.endsWith(".mp4")) {
            let PostSrc = document.getElementById('sauce')

            PostSrc.src = source

        } else {
            var PostContainer = document.getElementById('PostContainer')

            var Img = document.createElement('img')
            Img.src = source
            PostContainer.appendChild(Img)
        }
    })
}

GetPost()