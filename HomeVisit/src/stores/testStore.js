import { decorate, observable, action } from 'mobx';
import axios from 'axios';

const API_KEY = '48d64a2b5fb0c9ac98a441e978de9d1057244edb11b2594b6d6cfb14723ba637';

class Store {
  // observable to save search query
  text = '';

  // action to update text
  updateText = text => {
    this.text = text;
  };

  // observable to save image response from api
  data = [];

  // action to call API and search images
  searchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=1&query=${this.text}&orientation=landscape`
      )
      .then(({ data }) => {
        const { results } = data;
        let newData = [];
        if (results) {
          newData = results.map(({ urls }) => {
            return urls.small;
          });
        }
        this.setData(newData);
      })
      .catch(error => console.log({ error }));
  };

  // observables can be modifies by an action only
  setData = data => {
    this.data = data;
  };
}

// another way to decorate variables with observable
decorate(Store, {
  text: observable,
  updateText: action,
  data: observable,
  searchImage: action,
  setData: action
});

// export class
export default new Store();
