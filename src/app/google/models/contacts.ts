import { integer } from './common';

export type ContactResource = {
  resourceName: string;
  etag: string;
  metadata: {
    updateTime: string;
    deleted: boolean;
  };
  groupType: {
    [key: string]: string;
  };
  name: string;
  formattedName: string;
  memberResourceNames: [string];
  memberCount: integer;
  clientData: [
    {
      [key: string]: string;
    },
  ];
};
export type ContactsList = {
  contactGroups: [
    {
      resourceName: string;
      etag: string;
      metadata: {
        updateTime: string;
        deleted: boolean;
      };
      groupType: {
        [key: string]: string;
      };
      name: string;
      formattedName: string;
      memberResourceNames: [string];
      memberCount: integer;
      clientData: {
        [key: string]: string;
      };
    },
  ];
  totalItems: ContactsList[];
  nextPageToken: string;
  nextSyncToken: string;
};
// Parser Functions
export function parseContactResource(data: any): ContactResource {
  return { ...data };
}
export function parseContactsList(data: any): ContactsList {
  console.log(data);

  return {
    ...data,
    totalItems: (data?.totalItems || []).map((data: any) =>
      parseContactResource(data),
    ),
  };
}
