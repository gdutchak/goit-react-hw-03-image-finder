import { fetchImage } from "./utils/fetchImage";
import { Component } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { ColorRing } from "react-loader-spinner";
import { AppEl } from "./App.styled";
import { Notify } from 'notiflix';

const API_KEY = '29165116-db33726688e81f885d73ac474';
let data = '';
const imagePerPage = 12;
let allResult = 0;
let urlIm = '';

export class App extends Component {
  state = {
    name: '',
    collection: [],
    page: 1,
    visible: false,
    button: false,
    modal: false,
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.name !== this.state.name || prevState.page !== this.state.page) {
      this.setState({ visible: true })
      data = await fetchImage(this.state.name, this.state.page, API_KEY)
      allResult = data.totalHits;

      if (allResult === 0) {
        Notify.failure('Oooops, nothing found :(');
      }

      this.setState(prevState => ({
        collection: [...prevState.collection, ...data.hits],
        button: allResult / imagePerPage >= this.state.page ? true : false,
        visible: false,
      }))
    }

  }

  onSubmit = (e) => {
    e.preventDefault();
    let valueInput = e.currentTarget.elements[1].value;

    this.setState({
      name: valueInput,
      collection: [],
      page: 1,
    })

    e.currentTarget.reset();
  }
  onLoadPades = () => {
    this.setState(prevState => ({
      page: prevState.page += 1,
      visible: true,
    }))
  }
  closeModalWindow = (e) => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.setState({
        modal: false,

      })

      window.removeEventListener('click', this.closeModalWindow)
      window.removeEventListener('keydown', this.closeModalWindow)
    }
  }

  openModal = (url) => {
    window.addEventListener('click', this.closeModalWindow)
    window.addEventListener('keydown', this.closeModalWindow)

    this.setState({
      modal: true
    })
    return urlIm = url
  }


  render() {
    const { collection, visible, modal, button } = this.state;
    return (
      <AppEl>
        <SearchBar onSubmit={this.onSubmit}></SearchBar>
        <ImageGallery collection={collection} modal={this.openModal}></ImageGallery>
        {visible && <ColorRing
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}
        {modal && <Modal data={urlIm} closeModal={this.closeModalWindow}></Modal>}
        {button && <Button nextPage={this.onLoadPades}></Button>}
      </AppEl>
    )
  }
}




