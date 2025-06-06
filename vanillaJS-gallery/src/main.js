import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <h1 class="gridGalleryH1">Js Component Gallery</h1>

  <div class="main">
    <div class="gridGalleryCardContainer">

        <div class="gridGalleryCard">
            <img src="/image1.png" alt="placeholder">
            <div class="gridGalleryCardContent">
                <h3 class="gridGalleryCardContentH3">Drawer</h3>
                <p class="gridGalleryCardContentP">
                    A Drawer is a sliding panel that overlays the page, providing quick access to information or 
                    actions without leaving the current context. 
                </p>
                <a href="/src/components/Drawer/index.html" class="gridGalleryCardContentLink" target="_blank">Card One</a>
            </div>
        </div>

        <div class="gridGalleryCard">
            <img src="/Image3.png" alt="placeholder">
            <div class="gridGalleryCardContent">
                <h3 class="gridGalleryCardContentH3">Pagination</h3>
                <p class="gridGalleryCardContentP">
                    Pagination is the process of splitting information over multiple pages instead of showing it all on a single page; 
                    the name for the interface component used for navigating between these pages.
                </p>
                <a href="/src/components/Pagination/index.html" class="gridGalleryCardContentLink" target="_blank">Card Two</a>
            </div>
        </div>

        <div class="gridGalleryCard">
            <img src="https://placehold.co/600x400" alt="placeholder">
            <div class="gridGalleryCardContent">
                <h3 class="gridGalleryCardContentH3">Modal</h3>
                <p class="gridGalleryCardContentP">
                    A modal is a pop-up dialog box that appears on top of the main content. 
                    It's often used for alerts, confirmations, or displaying forms.
                </p>
                <a href="/src/components/Modal/index.html" class="gridGalleryCardContentLink" target="_blank">Card Three</a>
            </div>
        </div>
        
        <div class="gridGalleryCard">
            <img src="/image2.png" alt="placeholder">
            <div class="gridGalleryCardContent">
                <h3 class="gridGalleryCardContentH3">FileUpload</h3>
                <p class="gridGalleryCardContentP">
                    An input which allows users to upload a file from their device.
                    It can be used to upload images, documents, or any other file type. 
                </p>
                <a href="/src/components/FileUpload/index.html" class="gridGalleryCardContentLink" target="_blank">Card Four</a>
            </div>
        </div>

    </div>
  </div>
`

// setupCounter(document.querySelector('#counter'))
