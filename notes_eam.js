// inspection/index.js
import { call, put, takeLatest } from "redux-saga/effects";
import { apiCallWithRetry } from "../..";
import actions from "../../../actions";
import actionTypes from "../../../actions/types";
import { getInspectionOrderDetails } from "../../../queries/inspectionOrder/getInspectionOrderDetails";

export function* saveSignature(data = {}) {
  try {
    const response = yield call(apiCallWithRetry, {
      opts: {},
      query: getInspectionOrderDetails(data),
      gCtxtCmp: 'EAMInspectionOrder',
      hidden: true,
    });
    if (response?.['EAMInspectionOrder_getInspectionOrderDetails']?.getinspectionOrderDetails?.data) {
      const value = response?.['EAMInspectionOrder_getInspectionOrderDetails']?.getinspectionOrderDetails?.data;
      return yield put(actions.inspectionOrder.list.received({value}));
    }
    
  } catch (e) {
    
    // yield put(actions.woSparesReporting.list.received({ data: {list: ['a', 'b'] }}));
  }
};

export const ioLineDetailsListSagas = [
  takeLatest([
    actionTypes.INSPECTION_ORDER.SIGNATURE.REQUEST,
  ], saveSignature()),
];


// components/useralert/index.js
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTranslation } from 'react-i18next';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       {t("alert.open_alert_dialog")}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {t("alert.determine_location")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
          {t("alert.disagree")}
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
          {t("agree")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// commponets/switchgridlist
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SwitchableGridListItem = ({data, onItemClick, onDataChange, onItemSelect}) => {
  const [isSelected, setSelected] = useState(false);
  const { t } = useTranslation();
  const [consumeValue, setConsumeValue] = useState(data.consumedQty);

  const handleItemClick = () => {
    onItemClick(data);
  };

  const handleDataChange = (event) => {
    const value = event.target.value;
    setConsumeValue(value);
    onDataChange(data, value);
  }

  const handleItemSelect = (event) => {
    const value = event.target.checked;
    setSelected(value)
    onItemSelect(data, value);
  }

  return (
    <div className="item">
      <div className="checkContainer">
        <input type="checkbox" checked={isSelected} onChange={handleItemSelect}/>
      </div>
      <div className="imageContainer">
        <img src={data.imgUrl} alt="" className="itemImage" onClick={handleItemClick}/>
      </div>
      <div className="dataContainer">
        <div className="itemName">
          <strong>{data.ItemVariantShortDescriptionout} ({data.ScheduledQtyUOMout})</strong>
        </div>
        <div className="countContainer">
          <div className="fixedCounts">
            <div className="countItem">
              <span>{t("issued")}</span>
              <div>
                <strong>{data.IssuedQtyout}</strong>
              </div>
            </div>
            <div className="countItem">
              <span>{t("reported")}</span>
              <div>
                <strong>{data.ReservedQtyout}</strong>
              </div>
            </div>
          </div>
          <div className="variableCounts">
            <div className="countItem">
              <span>{t("consumed_now")}</span>
              <div>
                <input type="number" value={consumeValue} onChange={handleDataChange}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchableGridListItem;