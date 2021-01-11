﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend.entity.utilites;

namespace backend.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("backend.entity.product.Category", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("ParentCategoryId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("ParentCategoryId");

                    b.ToTable("Category");
                });

            modelBuilder.Entity("backend.entity.product.Option", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<double>("Price")
                        .HasColumnType("REAL");

                    b.Property<int>("Size")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Option");
                });

            modelBuilder.Entity("backend.entity.product.ProductConfiguration", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("ConfigName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("ProductConfiguration");
                });

            modelBuilder.Entity("backend.entity.user.RefreshToken", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("RefreashToken")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("RefreshToken");
                });

            modelBuilder.Entity("backend.entity.user.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<double>("Credits")
                        .HasColumnType("REAL");

                    b.Property<string>("Password")
                        .HasColumnType("TEXT");

                    b.Property<int>("Rights")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("entity.order.Order", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("ClientId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<double>("Price")
                        .HasColumnType("REAL");

                    b.Property<Guid?>("ProductId")
                        .HasColumnType("TEXT");

                    b.Property<int>("Status")
                        .HasColumnType("INTEGER");

                    b.Property<Guid?>("TableId")
                        .HasColumnType("TEXT");

                    b.Property<double>("Tip")
                        .HasColumnType("REAL");

                    b.Property<Guid?>("WorkerId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("ClientId");

                    b.HasIndex("ProductId");

                    b.HasIndex("TableId");

                    b.HasIndex("WorkerId");

                    b.ToTable("Order");
                });

            modelBuilder.Entity("entity.order.Product", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<double>("BasePrice")
                        .HasColumnType("REAL");

                    b.Property<string>("Category")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Product");
                });

            modelBuilder.Entity("entity.order.Table", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int>("Size")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Status")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Tables");
                });

            modelBuilder.Entity("backend.entity.product.Category", b =>
                {
                    b.HasOne("backend.entity.product.Category", "ParentCategory")
                        .WithMany()
                        .HasForeignKey("ParentCategoryId");

                    b.Navigation("ParentCategory");
                });

            modelBuilder.Entity("backend.entity.user.RefreshToken", b =>
                {
                    b.HasOne("backend.entity.user.User", null)
                        .WithMany("RefreshTokens")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("entity.order.Order", b =>
                {
                    b.HasOne("backend.entity.user.User", "Client")
                        .WithMany()
                        .HasForeignKey("ClientId");

                    b.HasOne("entity.order.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId");

                    b.HasOne("entity.order.Table", "Table")
                        .WithMany()
                        .HasForeignKey("TableId");

                    b.HasOne("backend.entity.user.User", "Worker")
                        .WithMany()
                        .HasForeignKey("WorkerId");

                    b.Navigation("Client");

                    b.Navigation("Product");

                    b.Navigation("Table");

                    b.Navigation("Worker");
                });

            modelBuilder.Entity("backend.entity.user.User", b =>
                {
                    b.Navigation("RefreshTokens");
                });
#pragma warning restore 612, 618
        }
    }
}
