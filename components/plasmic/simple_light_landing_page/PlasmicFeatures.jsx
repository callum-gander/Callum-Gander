// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nPAJjRdgZFrbGDnyeYXFFi
// Component: wIyOJs60r2Ucqe
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: hjbFT3xdBQpvM/component
import Section from "../../Section"; // plasmic-import: zZwgbNNQqGnYp/component
import Bullet from "../../Bullet"; // plasmic-import: DcZq28r0qwRqst/component
import LinkButton from "../../LinkButton"; // plasmic-import: vuMfqgxfPAOyJ/component
import HomeCta from "../../HomeCta"; // plasmic-import: yKRX7GtsGfCKL/component
import Footer from "../../Footer"; // plasmic-import: Gsal314BZ_09N/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: a3UJwGt1T7p74M/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: nPAJjRdgZFrbGDnyeYXFFi/projectcss
import * as sty from "./PlasmicFeatures.module.css"; // plasmic-import: wIyOJs60r2Ucqe/css

export const PlasmicFeatures__VariantProps = new Array();

export const PlasmicFeatures__ArgProps = new Array();

function PlasmicFeatures__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__c0Yr)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <Section
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              className={classNames("__wab_instance", sty.section)}
              subtitle={
                <React.Fragment>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___9Zqud
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                    }
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box__jF5Eq)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.box__kso2C)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__rIcZa
                        )}
                      >
                        {"Powerful suite of tools"}
                      </div>

                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__otGj4
                        )}
                      >
                        {
                          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                        }
                      </div>

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__hNxC4
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__odQOa
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__qnaIp
                        )}
                      />

                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__eUbFx
                        )}
                      >
                        {
                          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                        }
                      </div>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(defaultcss.all, sty.box___68ZuP)}
                      >
                        <LinkButton
                          text={"Start free trial"}
                          type={"solidBlue"}
                        />

                        <LinkButton text={"View demo"} type={"outlineBlue"} />
                      </p.Stack>
                    </p.Stack>

                    <div className={classNames(defaultcss.all, sty.box__o3K9U)}>
                      <img
                        alt={""}
                        className={classNames(defaultcss.img, sty.img___9Bldp)}
                        role={"img"}
                        src={
                          "/plasmic/simple_light_landing_page/images/simpleProject.png"
                        }
                      />

                      <img
                        alt={""}
                        className={classNames(defaultcss.img, sty.img__j5KXy)}
                        role={"img"}
                        src={
                          "/plasmic/simple_light_landing_page/images/task.png"
                        }
                      />
                    </div>
                  </p.Stack>
                </React.Fragment>
              }
              title={"The ultimate in feature set."}
            />

            <HomeCta
              data-plasmic-name={"homeCta"}
              data-plasmic-override={overrides.homeCta}
              className={classNames("__wab_instance", sty.homeCta)}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "section", "homeCta", "footer"],
  header: ["header"],
  section: ["section"],
  homeCta: ["homeCta"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFeatures__ArgProps,
      internalVariantPropNames: PlasmicFeatures__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFeatures__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatures";
  } else {
    func.displayName = `PlasmicFeatures.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatures = Object.assign(
  // Top-level PlasmicFeatures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicFeatures
    internalVariantProps: PlasmicFeatures__VariantProps,
    internalArgProps: PlasmicFeatures__ArgProps
  }
);

export default PlasmicFeatures;
/* prettier-ignore-end */
