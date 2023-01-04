/**
 * Organization summaries are sent when you request a list of all organizations
 */
export type OrganizationSummary = {
  // avatar: Avatar;
  dateCreated: string;
  features: string[];
  id: string;
  isEarlyAdopter: boolean;
  name: string;
  organizationUrl: string;
  require2FA: boolean;
  slug: string;
  // status: {
  //   id: ObjectStatus;
  //   name: string;
  // };
};

/**
 * Detailed organization (e.g. when requesting details for a single org)
 */
export type Organization = OrganizationSummary & {
  // access: Scope[];
  alertsMemberWrite: boolean;
  allowJoinRequests: boolean;
  allowSharedIssues: boolean;
  attachmentsRole: string;
  availableRoles: {id: string; name: string}[]; // Deprecated, use orgRoleList
  dataScrubber: boolean;
  dataScrubberDefaults: boolean;
  debugFilesRole: string;
  defaultRole: string;
  enhancedPrivacy: boolean;
  eventsMemberAdmin: boolean;
  // experiments: Partial<OrgExperiments>;
  isDefault: boolean;
  // onboardingTasks: OnboardingTaskStatus[];
  openMembership: boolean;
  // orgRoleList: OrgRole[];
  pendingAccessRequests: number;
  quota: {
    accountLimit: number | null;
    maxRate: number | null;
    maxRateInterval: number | null;
    projectLimit: number | null;
  };
  relayPiiConfig: string;
  safeFields: string[];
  scrapeJavaScript: boolean;
  scrubIPAddresses: boolean;
  sensitiveFields: string[];
  storeCrashReports: number;
  // teamRoleList: TeamRole[];
  // trustedRelays: Relay[];
  orgRole?: string;
  /**
   * @deprecated use orgRole instead
   */
  role?: string;
};
