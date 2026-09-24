export interface ParentChildLink {
  parent_id: string;
  child_id: string;
}

export function canAccessChildData(
  parentUserId: string | null,
  childUserId: string | null,
  links: ParentChildLink[] = [],
): boolean {
  if (!parentUserId || !childUserId) return false;

  if (parentUserId === childUserId) return false;

  return links.some((link) => link.parent_id === parentUserId && link.child_id === childUserId);
}

export function getAuthorizedChildIds(
  parentUserId: string | null,
  links: ParentChildLink[] = [],
): string[] {
  if (!parentUserId) return [];
  return links.filter((link) => link.parent_id === parentUserId).map((link) => link.child_id);
}
