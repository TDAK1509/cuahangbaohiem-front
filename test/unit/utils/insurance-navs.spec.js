import InsuranceNavs from "@/utils/insurance-navs";

describe("class InsuranceNavs", () => {
  it("homeNavs returns expected result", () => {
    const insuranceNavsInstance = new InsuranceNavs();
    expect(insuranceNavsInstance.homeNavs).toEqual(getHomeNavs());
  });

  it("headerNavs returns expected result", () => {
    const insuranceNavsInstance = new InsuranceNavs();
    expect(insuranceNavsInstance.headerNavs).toEqual(getHeaderNavs());
  });
});

function getHomeNavs() {
  return [
    {
      iconColorClass: "has-text-info",
      to: "/san-pham/o-to",
      iconClass: "fas fa-car",
      text: "Bảo hiểm ô tô"
    },

    {
      iconColorClass: "has-text-danger",
      to: "/san-pham/tai-nan",
      iconClass: "fas fa-car-crash",
      text: "Bảo hiểm tai nạn 24/24"
    },

    {
      iconColorClass: "has-text-success",
      to: "/san-pham/suc-khoe-ca-nhan",
      iconClass: "fas fa-file-medical",
      text: "Bảo hiểm sức khỏe cá nhân"
    },

    {
      iconColorClass: "has-text-warning",
      to: "/san-pham/ung-thu",
      iconClass: "fas fa-disease",
      text: "Bảo hiểm bệnh ung thư"
    },

    {
      iconColorClass: "has-text-info",
      to: "/san-pham/nha-tu-nhan",
      iconClass: "fas fa-house-damage",
      text: "Bảo hiểm nhà tư nhân"
    },

    {
      iconColorClass: "has-text-danger",
      to: "/san-pham/xe-may",
      iconClass: "fas fa-motorcycle",
      text: "Bảo hiểm xe máy"
    },

    {
      iconColorClass: "has-text-success",
      to: "/san-pham/du-lich-quoc-te",
      iconClass: "fas fa-plane-departure",
      text: "Bảo hiểm du lịch quốc tế"
    },

    {
      iconColorClass: "has-text-warning",
      to: "/san-pham/nhan-tho",
      iconClass: "fas fa-male",
      text: "Bảo hiểm nhân thọ"
    }
  ];
}

function getHeaderNavs() {
  return [
    {
      dataCy: "insurance-car",
      to: "/san-pham/o-to",
      iconClass: "fas fa-car",
      text: "Bảo hiểm ô tô"
    },

    {
      dataCy: "insurance-accident",
      to: "/san-pham/tai-nan",
      iconClass: "fas fa-car-crash",
      text: "Bảo hiểm tai nạn 24/24"
    },

    {
      dataCy: "insurance-personal-health",
      to: "/san-pham/suc-khoe-ca-nhan",
      iconClass: "fas fa-file-medical",
      text: "Bảo hiểm sức khỏe cá nhân"
    },

    {
      dataCy: "insurance-cancer",
      to: "/san-pham/ung-thu",
      iconClass: "fas fa-disease",
      text: "Bảo hiểm bệnh ung thư"
    },

    {
      dataCy: "insurance-house",
      to: "/san-pham/nha-tu-nhan",
      iconClass: "fas fa-house-damage",
      text: "Bảo hiểm nhà tư nhân"
    },

    {
      dataCy: "insurance-motorbike",
      to: "/san-pham/xe-may",
      iconClass: "fas fa-motorcycle",
      text: "Bảo hiểm xe máy"
    },

    {
      dataCy: "insurance-travel",
      to: "/san-pham/du-lich-quoc-te",
      iconClass: "fas fa-plane-departure",
      text: "Bảo hiểm du lịch quốc tế"
    },

    {
      dataCy: "insurance-life",
      to: "/san-pham/nhan-tho",
      iconClass: "fas fa-male",
      text: "Bảo hiểm nhân thọ"
    }
  ];
}
