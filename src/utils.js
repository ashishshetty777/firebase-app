export const collectIdsAndDocs = post => ({
  id: post.id,
  ...post.data(),
});
