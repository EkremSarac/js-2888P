const fetchUsersDetails = async () => {
    try {
    const params = new URLSearchParams(window.location.search)
    const userId = params.get("postId")
    console.log(userId)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const userDetailData = await response.json()
    displayUserDetails(userDetailData)
    } catch (error) {
        console.error("kullanıcı postları alınırken hata oluştu", error)
    }
}

const displayUserDetails = (userDetail) => {
    const detailsContainer = document.getElementById("detailsContainer")
    userDetail.forEach((user) => {
        const userDetailCard = `
            <div class="card" style="width: 18rem;">
                <div class="card-body text-center">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">${user.title}</p>
                    <p class="card-text">some informations</p>
                </div>
            </div>  
        `
        detailsContainer.innerHTML += userDetailCard
    })
}

window.onload = () => {
    fetchUsersDetails()
}