// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nPAJjRdgZFrbGDnyeYXFFi
// Component: hjbFT3xdBQpvM
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Avatar from "../../Avatar"; // plasmic-import: 5FkK8vgI3gMIAh/component
import LinkButton from "../../LinkButton"; // plasmic-import: vuMfqgxfPAOyJ/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: a3UJwGt1T7p74M/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: nPAJjRdgZFrbGDnyeYXFFi/projectcss
import * as sty from "./PlasmicHeader.module.css"; // plasmic-import: hjbFT3xdBQpvM/css
import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: wGF9gtiEctb3jK/icon

export const PlasmicHeader__VariantProps = new Array();

export const PlasmicHeader__ArgProps = new Array();

function PlasmicHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <Avatar
        data-plasmic-name={"avatar"}
        data-plasmic-override={overrides.avatar}
        className={classNames("__wab_instance", sty.avatar)}
        pic={
          <LogoIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />
        }
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box)}
      >
        <LinkButton
          className={classNames("__wab_instance", sty.linkButton__tz1Y6)}
          href={"/features"}
          text={"Features"}
          type={"small"}
        />

        <LinkButton
          className={classNames("__wab_instance", sty.linkButton__jaIDu)}
          href={"/pricing"}
          text={"Pricing"}
          type={"small"}
        />

        <LinkButton
          className={classNames("__wab_instance", sty.linkButton___3Y9FZ)}
          text={"Sign in"}
          type={"small"}
        />

        {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
          <LinkButton
            className={classNames("__wab_instance", sty.linkButton___1Yqff)}
            text={"Sign up ->"}
            type={"solidBlack"}
          />
        ) : null}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "avatar", "svg", "box"],
  avatar: ["avatar", "svg"],
  svg: ["svg"],
  box: ["box"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    svg: makeNodeComponent("svg"),
    box: makeNodeComponent("box"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
