// Reference Manager Database using JSON

// Array to store references
const references = [
      {
          title: "Designing for a shared autonomous vehicle fleet: User experience implications of future mobility systems",
          url: "https://sci-hub.se/https://dl.acm.org/doi/abs/10.1145/2987491.2987498",
      },
      {
          title: "The impact of AI and IoT on future industries: Opportunities and challenges",
          url: "https://sci-hub.se/https://www.sciencedirect.com/science/article/abs/pii/S2212420920312644",
      },
      {
          title: "Predicting user behavior with AI models",
          url: "https://sci-hub.se/10.1016/j.chb.2021.106899",
      },
      {
          title: "Educational technology integration in modern classrooms",
          url: "https://sci-hub.se/https://link.springer.com/article/10.1007/s10648-020-09576-4",
      },
      {
          title: "Health and Well-being of Children: A review of emerging patterns",
          url: "https://www.mdpi.com/2227-9067/11/11/1299",
      },
      {
          title: "Exploring UX design for emerging markets",
          url: "https://sci-hub.se/https://dl.acm.org/doi/abs/10.1145/3077136.3080770",
      },
      {
          title: "Adoption of e-learning tools in higher education",
          url: "https://sci-hub.se/10.1007/s11423-019-09667-2",
      },
      {
          title: "Effects of cognitive load on learning",
          url: "https://sci-hub.se/10.1111/psyp.13554",
      },
      {
          title: "Digital communication patterns in remote teams",
          url: "https://sci-hub.se/10.1016/j.tele.2021.101696",
      },
      {
          title: "Emerging technologies and their societal implications",
          url: "https://sci-hub.se/10.1073/pnas.1611611114",
      },
      {
          title: "Evaluating the impact of IoT in smart cities",
          url: "https://sci-hub.se/10.1109/icriis.2013.6716710",
      },
      {
          title: "A comparative study of data analytics methodologies",
          url: "https://koreascience.kr/article/JAKO201911263062221.pdf",
      },
      {
          title: "Analyzing e-commerce trends in developing nations",
          url: "https://sci-hub.se/https://www.sciencedirect.com/science/article/abs/pii/S0736585321000174",
      },
      {
          title: "Understanding cultural shifts in global perspectives",
          url: "https://ijhsss.com/files/vii.---Eng--Aarti-Shukla.pdf",
      },
      {
          title: "Kurdish Studies: A historical analysis",
          url: "https://kurdishstudies.net/menu-script/index.php/KS/article/view/2873/1869",
      },
      {
          title: "The role of online education in skill development",
          url: "https://sci-hub.se/10.1186/s41239-018-0096-z",
      },
      {
          title: "Feminist perspectives in psychological research",
          url: "https://sci-hub.se/10.1177/0959354318815766",
      }
  ];
  
  // Function to display all references
  function displayReferences() {
      console.log("Stored References:");
      references.forEach((ref, index) => {
          console.log(`${index + 1}. Title: ${ref.title}\n   URL: ${ref.url}\n`);
      });
  }
  
  // Call the function to display references
  displayReferences();
  