import { IScriptAttributes } from 'types';

export const SCRIPT_TAG_SELECTOR = 'script[data-domain-uuid]';

export const ATTRIBUTES = {
  TENANT_UUID: 'data-tenant-uuid',
  DOMAIN_UUID: 'data-domain-uuid',
  BASE_URL: 'data-backend-url',
  CDN_BASE_URL: 'data-cdn-url',
  SKIP_CSS: 'data-skip-css',
  STAGING_MODE: 'data-securiti-staging-mode',
  LOAD_UTILS: 'data-load-utils',
  PUBLISHED_VERSION: 'data-published-version',
};

export const REQUIRED_ATTRIBUTES = [
  ATTRIBUTES.TENANT_UUID,
  ATTRIBUTES.DOMAIN_UUID,
  ATTRIBUTES.BASE_URL,
];

export const DEFAULT_SCRIPT_ATTRS: IScriptAttributes = {
  tenantUUID: null,
  domainUUID: null,
  baseUrl: 'https://dev.securiti.xyz/',
  cdnBaseUrl: 'https://cdn-dev.securiti.xyz/consent',
  publishedVersion: '',
  skipCSS: false,
  stagingMode: false,
  loadUtils: false,
};
