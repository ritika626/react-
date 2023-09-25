import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  useGridApiRef,
} from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  badge: {
    borderLeft: "5px solid red !important",
  },
});

const originalRows = [
  {
    id: 1,
    date: "",
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
  },
  {
    id: 2,
    date: new Date(),
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
  },
  { id: 3, date: "", lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, date: "", lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, date: "", lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, date: "", lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, date: "", lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, date: "", lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, date: "", lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const DataTable = () => {
  const [rows, setRows] = useState(originalRows);
  const [addedRow, setAddedRow] = useState([]);
  const tableDataGridRef = useGridApiRef();
  const classes = useStyles();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      // classes: classes.badge,
      // cellClassName: (params) => {
      //   console.log(params);
      //   return classes.badge;
      // },
      cellClassName: (params) => (params.row?.showBadge ? classes.badge : ""),
      // renderCell: (row) => {
      //   // console.log(row);
      //   return (
      //     <div style={{ display: "flex", alignItems: "center" }}>
      //       <div className={classes.badge}></div>
      //       {row.id}
      //     </div>
      //   );
      // },
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "date",
      headerName: "date",
      width: 90,
      type: "date",
      editable: true,
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      // type: "singleselect",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      // editable: true,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "actions",
      headerName: "Actions",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      renderCell: (row) => {
        return (
          <>
            {row.row.newlyAdded ? (
              <button onClick={() => handleAddRow(row)}>addRow</button>
            ) : (
              ""
            )}

            {row.row.deletedDisable ? (
              <button onClick={(e) => handleUndoDelete(e, row)}>Undo</button>
            ) : (
              <button onClick={() => handleDelete(row.row)}>Delete</button>
            )}
          </>
        );
      },
    },
  ];

  const groupColumns = [
    {
      groupId: "ritika",
      subColumns: ["firstName", "lastName"],
    },
    {
      groupId: "Full Detail",
      subColumns: [
        {
          groupId: "detail",
          subColumns: ["age", "date"],
        },
      ],
    },
  ];

  const handleUndoDelete = (e, row) => {
    console.log(row);
    e.stopPropagation();
    let newRows = [...rows];
    let undoIndex = newRows.findIndex((i) => i.id === row.row.id);
    newRows[undoIndex] = {
      ...row.row,
      deletedDisable: false,
      selected: false,
      active: false,
    };
    setRows(newRows);
    row.api.selectRow(row.id, false);
    // tableDataGridRef.current.selectRow(row.id, false);
  };

  const handleRowSelected = (row) => {
    let newRows = [...rows];
    let undoIndex = newRows.findIndex((i) => i.id === row.row.id);
    newRows[undoIndex] = {
      ...row.row,
      deletedDisable: false,
      isSelected: true,
      active: false,
    };
    setRows(newRows);
  };

  const handleAdd = () => {
    let newRows = [...rows];
    newRows = [
      {
        id: uuidv4(),
        lastName: "",
        firstName: "",
        age: "",
        newlyAdded: true,
      },
      ...newRows,
    ];
    setRows(newRows);
  };

  const handleAddRow = (row) => {
    setAddedRow([...addedRow, row.row]);
    let newRows = [...rows];
    const rows_duplicate_remove = newRows.filter((i) => i.id !== row.id);
    setRows([
      {
        id: uuidv4(),
        lastName: "",
        firstName: "",
        age: "",
        newlyAdded: true,
      },
      { ...row.row, id: uuidv4(), newlyAdded: false, showBadge: true },
      ...rows_duplicate_remove,
    ]);
  };

  const handleDelete = (row) => {
    console.log(row.id);
    // let newRows = [...rows];
    // let deletedRow = newRows.filter((i) => i.id !== row.id);
    // setRows(deletedRow);
    let newRows = [...rows];
    let deletedRow = newRows.findIndex((i) => i.id === row.id);
    newRows[deletedRow] = { ...row, deletedDisable: true };
    if (row.newlyAdded) {
      newRows = newRows.filter((i) => !i.newlyAdded);
    }
    setRows(newRows);
  };

  function groupingColumn(arr) {
    // arr.map((item, index) => {
    //   item.groupId = item.groupId;
    //   item.children = item.subColumns.map((i) => {
    //     return { field: i };
    //   });
    //   delete item.subColumns;
    //   // return {
    //   //   groupId: item.groupId,
    //   //   children: item.subColumns.map((i) => {
    //   //     return { field: i };
    //   //   }),
    //   // };
    // });
    // return arr;
    let empArr = [];
    arr.map((item) => {
      empArr = [
        ...empArr,
        {
          groupId: item.groupId,
          children: callRecursion(item.subColumns),
        },
      ];
    });
    return empArr;
  }

  function callRecursion(arr) {
    let empArr = [];
    arr.map((i) => {
      if (typeof i === "object") {
        empArr = [
          ...empArr,
          {
            groupId: i.groupId,
            children: callRecursion(i.subColumns),
          },
        ];
      }
      empArr = [...empArr, { field: i }];
    });
    return empArr;
  }

  console.log("group columns by clmns", groupingColumn(groupColumns));

  // const columnGroupingModel = [
  //   {
  //     groupId: "full",
  //     headerName: "full",
  //     description: "",
  //     children: [{ field: "firstName" }, { field: "lastName" }],
  //   },
  //   {
  //     groupId: "character",
  //     headerName: "character",
  //     children: [
  //       {
  //         groupId: "exntry",
  //         children: [{ field: "id" }, { field: "date" }],
  //       },
  //     ],
  //   },
  // ];

  return (
    <>
      <button onClick={handleAdd}>Add</button>
      <button>Save</button>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          experimentalFeatures={{ columnGrouping: true }}
          pageSizeOptions={[5]}
          // apiRef={tableDataGridRef}
          onStateChange={(state, test, details) => console.log(state)}
          isCellEditable={(params) => {
            return params.row?.newlyAdded && !params.row?.deletedDisable
              ? true
              : false;
          }}
          columnGroupingModel={groupingColumn(groupColumns)}
          // isCellEditable={(params) => {
          //   return params.row?.deletedDisable ? false : true;
          // }}
        />
      </Box>
    </>
  );
};

export default DataTable;
