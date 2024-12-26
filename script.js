const fetchUsers = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const userData = await response.json()
        displayUsers(userData)
    } catch (error) {
        console.error("kullanıcılar yüklenemedi", error)
    }
}

const displayUsers = (users) => {
    const container = document.getElementById("user-cards")
    users.forEach((user) => {
        container.innerHTML += `
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="User avatar">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text"><i class="fa-solid fa-person"></i>${user.username}</p>
                        <p class="card-text"><i class="fa-solid fa-location-dot"></i>${user.address.street}</p>
                        <p class="card-text"><i class="fa-solid fa-building"></i>${user.company.name}</p>
                        <p class="card-text"><i class="fa-solid fa-envelope"></i>${user.email}</p>
                        <p class="card-text"><i class="fa-solid fa-phone"></i>${user.phone}</p>
                        <a href="profile.html?userId=${user.id}" class="btn btn-primary">Profile Git</a>
                    </div>
                </div>
            </div>
        `
    })
}

document.getElementById("searchForm").addEventListener("submit", (event) => {
    event.preventDefault()
    const userIdInput = Number(document.getElementById("searchInput").value)
    if(userIdInput >= 1 && userIdInput <= 10) {
        window.location.href = `profile.html?postId=${userIdInput}`

    } else {
        alert("geçerli sayı giriniz!")
    }
})

window.onload = () => {
    fetchUsers()
    document.getElementById("searchInput").value = ""
}