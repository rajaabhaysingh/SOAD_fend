import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Select from "react-select/async";

import {
  pri_col,
  pri_very_light,
  sec_col,
  text_8a,
} from "../../../../../constants/Colors";

const NewPost = () => {
  // local state management
  const [isJobPermanent, setIsJobPermanent] = useState(false);

  const history = useHistory();

  // cancelPost
  const cancelPost = () => {
    history.goBack();
  };

  // defining custom theme for select component
  const customTheme = (theme) => {
    return {
      ...theme,
      border: "1px solid",
      background: pri_col,
      colors: {
        ...theme.colors,
        primary25: pri_very_light,
        primary: pri_col,
      },
    };
  };

  const arrowStyleWrapper = {
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      color: sec_col,
    }),
    control: (base, state) => ({
      ...base,
      // background: pri_very_light,
      borderColor: state.isFocused ? pri_col : text_8a,
      "&:hover": {
        borderColor: state.isFocused ? pri_col : text_8a,
      },
    }),
  };

  // list of productCat
  const productCatList = [
    {
      value: "NORMAL",
      label: "Normal",
    },
    {
      value: "BULK",
      label: "Bulk",
    },
  ];

  // filterData
  const filterData = useCallback(
    (inputValue) => {
      return productCatList.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    },
    [productCatList]
  );

  // promiseOptions
  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterData(inputValue));
      }, 1000);
    });

  // renderCheckbox
  const renderCheckbox = (boolVal) => {
    if (boolVal) {
      return (
        <i
          onClick={() => setIsJobPermanent(() => !isJobPermanent)}
          className="far fa-check-square"
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => setIsJobPermanent(() => !isJobPermanent)}
          className="far fa-square"
        ></i>
      );
    }
  };

  return (
    <div className="fcol w-100 h-100 of-scr">
      <div className="dash_body_box bg_white round-8 pad_pc-32_mob-16">
        <div className="f_lrtb pc_space_bw">
          <div className="fcol">
            <div className="fsxl fwb">New job posting</div>
            <div className="fsxs fc_5c mar_t-8">
              Fill the details below to post a new job ad.
            </div>
          </div>

          <Popup
            trigger={
              <button className="dash_opt_btn-1 btn cur fsm fcc mob_mar_t-32 pad_8-16 round-4 bg_err fc_white fwb">
                <i className="fas fa-times mar_r-8"></i>
                Cancel
              </button>
            }
            modal
            className="cnf_popup"
          >
            {(close) => (
              <div className="fcol round-8 pad-16">
                <div className="fsm fwb w-100 align-c">Are you sure ??</div>
                <div className="w-100 mar_t-16 pad-16 bb fc_pri fss round-8 bg_pri-light vis-flex">
                  <i className="fas fa-info-circle mar_r-8 mar_t-2"></i>
                  <span>
                    All changes will be lost permanently. Click "Cancel" to stay
                    on this page and continue filling up the form.
                  </span>
                </div>
                <div className="fcc mar_t-32">
                  <button
                    className="btn bg_succ-light pad_8-16 bor_succ-2 round-4 fwb cur"
                    onClick={cancelPost}
                  >
                    Exit now
                  </button>
                  <button
                    className="btn mar_l-32 bg_err-light bor_err-2 pad_8-16 round-4 fwb cur"
                    onClick={close}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        {/* form details div */}
        <div className="mar_t-32 fcol">
          <div className="fsm fc_sec fwb">Enter the job details below:</div>
          <form className="fcol mar_t-32" style={{ maxWidth: "720px" }}>
            <div className="fsxs gc_5c">Select job category:</div>
            <Select
              styles={arrowStyleWrapper}
              required
              theme={customTheme}
              loadOptions={promiseOptions}
              cacheOptions
              defaultOptions
              className="w-100 mar_t-4 fsm"
              placeholder="Select job category"
              isSearchable
              // onChange={(prodQtyUnit) =>
              //   setFormState({
              //     ...formState,
              //     prodQtyUnit: {
              //       prodQtyUnit,
              //     },
              //   })
              // }
            />
            <div className="fsxs mar_t-16 gc_5c">Enter job title:</div>
            <input
              className="mar_t-4 w-100 height_sized inp_pri pad_0-12 bb focus-normal"
              placeholder="Eg: Daily wage worker"
              type="text"
            />
            <div className="fsxs mar_t-16 gc_5c">Job description:</div>
            <textarea
              style={{
                maxWidth: "100%",
                maxHeight: "100px",
              }}
              className="mar_t-4 w-100 h-80p inp_pri pad_4-12 bb focus-normal"
              placeholder="Write a short description about the job."
            ></textarea>
            <div className="fsxs mar_t-16 gc_5c">Job duration:</div>
            <div className="fc mar_t-4 w-100">
              {renderCheckbox(isJobPermanent)}
              <label className="mar_l-8" htmlFor="job_permanent">
                This is a permanent job.
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="dash_body_box bg_white round-8 pad-16">
        <div></div>
      </div>
    </div>
  );
};

export default NewPost;
