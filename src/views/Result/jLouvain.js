import jLouvain from "jlouvain.js";

const isFollowedBack = (_source, _target, _links) =>
  _links.some((link) => link.source === _target && link.target === _source);

const filterNodes = (_nodes) => _nodes.map((node) => node.name);

const filterLinks = (_links) =>
  _links.map((link) => ({
    source: link.source,
    target: link.target,
    weight: isFollowedBack(link.source, link.target, _links) ? 2 : 1,
  }));

const filterDuplicatedLinks = (_links) =>
  _links.filter((link, idx) =>
    isFollowedBack(link.source, link.target, _links)
      ? _links.findIndex(
          (l) => l.source === link.target && l.target === link.source
        ) < idx
      : true
  );

const findCommunity = (_target, _nodes, _links) => {
  const nodes = filterNodes(_nodes);
  const duplicatedLinks = filterLinks(_links);
  const links = filterDuplicatedLinks(duplicatedLinks);

  const partition = jLouvain().nodes(nodes).edges(links);

  const community = partition();

  if (!community) return [_nodes[0]];

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
