import { ErrorCode } from 'enums';
import { BaseError, ScriptNotFound } from 'errors';
import { IScriptAttributes } from 'types';
import {
  ATTRIBUTES,
  REQUIRED_ATTRIBUTES,
  SCRIPT_TAG_SELECTOR,
} from '../constants';

function getScriptRef(
  scriptSelector: string = SCRIPT_TAG_SELECTOR,
): HTMLScriptElement | null {
  return document.querySelector(scriptSelector);
}

/**
 * @description This will check for the existence of the securiti script tag and validates if present.
 * @param scriptSelector - selector of the securiti cookie consent script tag.
 * @returns true if script present in the dom and all the required attributes are present otherwise false.
 * @internal
 */
function runScriptTagValidator(scriptRef: HTMLScriptElement): boolean {
  if (!scriptRef) {
    throw new ScriptNotFound();
  }

  // If all required attrs are present in the script tag then return true.
  // otherwise return false.
  // TODO: Check for values of attributes - typechecks, input validations etc.
  return REQUIRED_ATTRIBUTES.every((attr) => scriptRef.hasAttribute(attr));
}

/**
 * @description This function will scrape the config from script tag.
 * @param scriptRef Reference to the securiti script tag.
 * @returns IScriptAttributes script tag config.
 * @internal
 */
function scrapeConfig(scriptRef: HTMLScriptElement): IScriptAttributes {
  const baseUrl = scriptRef.getAttribute(ATTRIBUTES.BASE_URL) as string;
  const cdnBaseUrl = scriptRef.getAttribute(ATTRIBUTES.CDN_BASE_URL) as string;
  const domainUUID = scriptRef.getAttribute(ATTRIBUTES.DOMAIN_UUID) as string;
  const tenantUUID = scriptRef.getAttribute(ATTRIBUTES.TENANT_UUID) as string;
  const skipCSS = scriptRef.getAttribute(ATTRIBUTES.SKIP_CSS) === 'false';
  const stagingMode = scriptRef.getAttribute(ATTRIBUTES.STAGING_MODE) === 'true';
  const loadUtils = scriptRef.getAttribute(ATTRIBUTES.LOAD_UTILS) === 'true';
  const publishedVersion = scriptRef.getAttribute(
    ATTRIBUTES.PUBLISHED_VERSION,
  ) as string;

  const scriptAttrs: IScriptAttributes = {
    baseUrl,
    cdnBaseUrl,
    domainUUID,
    tenantUUID,
    skipCSS,
    stagingMode,
    loadUtils,
    publishedVersion,
  };
  return scriptAttrs;
}

/**
 * 
 * @returns IScriptAttributes config extracted from script tag.
 */
export const runConfigScraper = () => {
  // get script tag ref
  const scriptRef = getScriptRef(SCRIPT_TAG_SELECTOR);

  if (!scriptRef) {
    throw new ScriptNotFound();
  }

  // validate scrip tag.
  const isValid = runScriptTagValidator(scriptRef);

  if (!isValid) {
    throw new BaseError('Script tag must have all the required attributes', ErrorCode.HALT_ON_ERROR);
  }

  return scrapeConfig(scriptRef);
};
