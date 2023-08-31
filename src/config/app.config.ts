interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Teacher'],
  customerRoles: [],
  tenantRoles: ['Teacher', 'Parent'],
  tenantName: 'School',
  applicationName: 'Parent Teacher Link',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage student profiles',
    'Manage student performance data',
    'Invite parents to the application',
    'Communicate with parents',
  ],
};
