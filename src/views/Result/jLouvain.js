import jLouvain from "jlouvain.js";

const isFollowedBack = (_source, _target, _links) =>
  _links.some((link) => link.source === _target && link.target === _source);

const filterNodes = (_nodes) => _nodes.map((node) => node.name);

const filterLinks = (_links) => {
  return _links.map((link) => ({
    source: link.source,
    target: link.target,
    weight: 10,
  }));
};

const filterFollowedBack = (_links) =>
  _links.filter((link) => isFollowedBack(link.source, link.target, _links));

const findCommunity = (_target, _nodes, _links) => {
  const nodes = filterNodes(_nodes);
  const links = filterLinks(_links);

  const followBackLinks = filterFollowedBack(links);

  if (followBackLinks.length === 0) {
    return [_nodes[0]];
  }

  const partition = jLouvain().nodes(nodes).edges(followBackLinks);

  const community = partition();
  console.log(followBackLinks, community);

  const targetNumber = community[_target];

  const communityMembers = Object.entries(community)
    .map((member) => (member[1] === targetNumber ? member[0] : null))
    .map((member) =>
      member ? _nodes.find((node) => node.name === member) : null
    )
    .filter((member) => member);

  return communityMembers;
};

export default findCommunity;
