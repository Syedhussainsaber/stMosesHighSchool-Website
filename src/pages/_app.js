import '@/styles/globals.css'
import "@/styles/Sass/components/navbar.scss"
import "@/styles/Sass/index.scss"
import "@/styles/Sass/components/footer.scss"
import "@/styles/Sass/academics.scss"
import "@/styles/Sass/admission.scss"
import "@/styles/Sass/budsPreSchool.scss"
import "@/styles/Sass/event.scss"
import "@/styles/Sass/facilities.scss"
import "@/styles/Sass/pg.scss"
import "@/styles/Sass/components/scrollToTop.scss"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {

  return <><Component {...pageProps}/>
  <ToastContainer/>
  </>
}
