interface BaseNav {
  to: string;
  iconClass: string;
  text: string;
}

interface HomeNav extends BaseNav {
  iconColorClass: string;
}

interface HeaderNav extends BaseNav {
  dataCy: string;
}

export default class InsuranceNavs {
  private _baseNavs: BaseNav[];
  private _homeNavs: HomeNav[];
  private _headerNavs: HeaderNav[];

  constructor() {
    this._baseNavs = getBaseNavs();
    this._homeNavs = this.prepareHomeNavs();
    this._headerNavs = this.prepareHeaderNavs();
  }

  get homeNavs(): HomeNav[] {
    return this._homeNavs;
  }

  get headerNavs(): HeaderNav[] {
    return this._headerNavs;
  }

  prepareHomeNavs(): HomeNav[] {
    return this._baseNavs.map((nav, index) => {
      if (index % 4 === 0) {
        return { ...nav, iconColorClass: "has-text-info" };
      } else if (index % 4 === 1) {
        return { ...nav, iconColorClass: "has-text-danger" };
      } else if (index % 4 === 2) {
        return { ...nav, iconColorClass: "has-text-success" };
      } else {
        return { ...nav, iconColorClass: "has-text-warning" };
      }
    });
  }

  prepareHeaderNavs(): HeaderNav[] {
    return this._baseNavs.map((nav, index) => {
      if (index % 8 === 0) {
        return { ...nav, dataCy: "insurance-car" };
      } else if (index % 8 === 1) {
        return { ...nav, dataCy: "insurance-accident" };
      } else if (index % 8 === 2) {
        return { ...nav, dataCy: "insurance-personal-health" };
      } else if (index % 8 === 3) {
        return { ...nav, dataCy: "insurance-cancer" };
      } else if (index % 8 === 4) {
        return { ...nav, dataCy: "insurance-house" };
      } else if (index % 8 === 5) {
        return { ...nav, dataCy: "insurance-motorbike" };
      } else if (index % 8 === 6) {
        return { ...nav, dataCy: "insurance-travel" };
      } else {
        return { ...nav, dataCy: "insurance-life" };
      }
    });
  }
}

function getBaseNavs(): BaseNav[] {
  return [
    {
      to: "/san-pham/o-to",
      iconClass: "fas fa-car",
      text: "Bảo hiểm ô tô"
    },

    {
      to: "/san-pham/tai-nan",
      iconClass: "fas fa-car-crash",
      text: "Bảo hiểm tai nạn 24/24"
    },

    {
      to: "/san-pham/suc-khoe-ca-nhan",
      iconClass: "fas fa-file-medical",
      text: "Bảo hiểm sức khỏe cá nhân"
    },

    {
      to: "/san-pham/ung-thu",
      iconClass: "fas fa-disease",
      text: "Bảo hiểm bệnh ung thư"
    },

    {
      to: "/san-pham/nha-tu-nhan",
      iconClass: "fas fa-house-damage",
      text: "Bảo hiểm nhà tư nhân"
    },

    {
      to: "/san-pham/xe-may",
      iconClass: "fas fa-motorcycle",
      text: "Bảo hiểm xe máy"
    },

    {
      to: "/san-pham/du-lich-quoc-te",
      iconClass: "fas fa-plane-departure",
      text: "Bảo hiểm du lịch quốc tế"
    },

    {
      to: "/san-pham/nhan-tho",
      iconClass: "fas fa-male",
      text: "Bảo hiểm nhân thọ"
    }
  ];
}
