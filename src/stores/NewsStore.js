import { observable, action } from "mobx";
import axios from "axios";

class NewsStore {
  @observable
  newsData = null;
  @observable
  loadDataError = false;
  @observable
  pageName = "";

  @action
  loadData = async () => {
    try {
      let filePath =
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
      const response = await axios.get(filePath);
      // this.newsData = response.data;
      this.loadItem(response.data);
    } catch (error) {
      this.loadDataError = true;
    }
  };

  @action
  loadItem = data => {
    let dataItems = [];
    data.forEach((item, index) => {
      if (index < 20) {
        let filePath =
          "https://hacker-news.firebaseio.com/v0/item/" +
          item +
          ".json?print=pretty";
        axios
          .get(filePath)
          .then(response => {
            dataItems.push(response.data);
            if (index === 19) {
              this.newsData = dataItems;
            }
          })
          .catch(error => {});
      }
    });
  };
}

export default new NewsStore();