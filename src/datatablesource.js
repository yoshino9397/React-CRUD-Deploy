export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Price",
    width: 200,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.stock}`}>
          {params.row.stock}
        </div>
      );
    },
  },
];
