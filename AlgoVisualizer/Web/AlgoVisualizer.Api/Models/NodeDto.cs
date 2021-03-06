﻿namespace AlgoVisualizer.Api.Models
{
    using System.ComponentModel.DataAnnotations;
    using AlgoVisualizer.Models.Maze;
    using AlgoVisualizer.Models.PathFinding.AStar;
    using AlgoVisualizer.Models.PathFinding.Bfs;
    using AlgoVisualizer.Models.PathFinding.Dfs;
    using AlgoVisualizer.Models.PathFinding.Dijkstra;
    using Common;
    using Common.AutoMapping.Interfaces;

    public class NodeDto :
        IMapWith<AStarNode>,
        IMapWith<DijkstraNode>,
        IMapWith<DfsNode>,
        IMapWith<BfsNode>,
        IMapWith<MazeNode>
    {
        [Required]
        public int Row { get; set; }

        [Required]
        public int Col { get; set; }

        [Required]
        public bool IsStart { get; set; }

        [Required]
        public bool IsEnd { get; set; }

        [Required]
        public bool IsWeight { get; set; }

        [Required]
        public bool IsWall { get; set; }

        public string NodeType
            => this.IsStart ? ModelConstants.StartNode
                : this.IsEnd ? ModelConstants.EndNode
                : this.IsWeight ? ModelConstants.WeightNode
                : this.IsWall ? ModelConstants.WallNode
                : null;

        public int Weight
            => this.IsWeight ? ModelConstants.WeightNodeValue : ModelConstants.DefaultWeightNodeValue;
    }
}