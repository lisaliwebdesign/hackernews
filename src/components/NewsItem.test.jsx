import NewsItem from "./NewsItem";

it("<components><NewsItems - renders component", () => {
  const testingData = [
    {
      by: "rlancer",
      descendants: 399,
      id: 18428497,
      kids: [18429795, 18429547],
      score: 773,
      time: 1541969277,
      title:
        "Google Kubernetes Engine's third consecutive day of service disruption",
      type: "story",
      url: "https://status.cloud.google.com/incident/container-engine/18005"
    },
    {
      by: "rlancer",
      descendants: 399,
      id: 18428497,
      kids: [18429795, 18429547],
      score: 773,
      time: 1541969277,
      title:
        "Google Kubernetes Engine's third consecutive day of service disruption",
      type: "story",
      url: "https://status.cloud.google.com/incident/container-engine/18005"
    }
  ];
  const type = "beststories";

  const wrapper = shallow(<NewsItem content={testingData} type={type} />);
  expect(wrapper).toMatchSnapshot();
});
