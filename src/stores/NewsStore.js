import { observable, action } from "mobx";
import axios from "axios";

class NewsStore {
  @observable
  newsData = null;
  @observable
  newsItemsData = null;
  @observable
  loadDataError = false;
  @observable
  loadDataItemsError = false;
  @observable
  newsDataGroupArrayCount = 0;
  @observable
  newsDataGroupArray = null;

  @action
  loadData = async (path, count) => {
    try {
      //Clear prev data
      this.newsData = null;
      this.newsItemsData = null;
      this.loadDataError = false;
      this.loadDataItemsError = false;
      this.newsDataGroupArrayCount = 0;
      this.newsDataGroupArray = null;
      //Set path and default
      path = path === undefined ? "topstories" : path;
      let filePath = "https://hacker-news.firebaseio.com/v0/" + path + ".json";
      const response = await axios.get(filePath);
      this.newsData = response.data;
      //Divide data in to groups for lazy load
      const chunkedArray = response.data.reduce((resultArray, item, index) => {
        //Divide data by count - (user pass in count)
        const chunkIndex = Math.floor(index / count);
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []; // start a new chunk
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
      }, []);
      //Set observable
      this.newsDataGroupArray = chunkedArray;
      this.newsDataGroupArrayCount = chunkedArray.length - 1;
      //Load first set of data
      this.loadItems(chunkedArray[0]);
    } catch (error) {
      this.loadDataError = true;
    }
  };

  @action
  loadItems = data => {
    //Set data array
    let dataItems = this.newsItemsData ? this.newsItemsData : [];
    let dataLength = data.length - 1;
    data.forEach((item, index) => {
      let filePath =
        "https://hacker-news.firebaseio.com/v0/item/" + item + ".json";
      axios
        .get(filePath)
        .then(response => {
          dataItems.push(response.data);
          //Update observable array when the last data item is back
          if (index === dataLength) {
            this.newsItemsData = dataItems;
          }
        })
        .catch(error => {
          this.loadDataItemsError = true;
        });
    });
  };
}

export default new NewsStore();
