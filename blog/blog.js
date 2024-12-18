//buat variabel untuk menampung data
let blogs = [];

// function :untuk membuat suatu fungsi/perintah
function addBlog(event) {
    //method untuk mencegah halaman terrefresh saat menjalankan fungsi
    event.preventDefault();
    
    //menampung data dari input user
    let title = document.getElementById("input-blog-title").value;
    let description = document.getElementById("input-blog-content").value;
    let image = document.getElementById("input-blog-image");

    //untuk mengambil gambar
    image = URL.createObjectURL(image.files[0]);

    //variabel
    const blog = {
        blogTitle : title,
        blogContent : description,
        blogImage : image,
    };

    // push : method array untuk nambahin data kedalam array
    blogs.push(blog);
    console.log(blogs);

    renderBlog();
}

// fungsi untuk menyisipkan data baru ke element html
function renderBlog(){
    // akses ke element html melalui id
    let contentContainer = document.getElementById("contentData");

    // inject/sisipkan elemen html
    contentContainer.innerHTML ="";

    //looping tiap data didalam array(blogs) dan render ke html
    for(let i=0;i<blogs.length;i++){
        contentContainer.innerHTML += `
        <div class="blog-list-item">
                <div class="blog-image">
                    <img src="${blogs[i].blogImage}" alt="blog-image">
                </div>
                <div class="blog-content">
                    <h2>${blogs[i].blogTitle}</h2>
                    <span class="detail-blog">
                        17 Des 2024 9:00 | Author
                    </span>
                    <p>
                       ${blogs[i].blogContent}
                    </p>
                </div>
            </div>
        `
    }
}