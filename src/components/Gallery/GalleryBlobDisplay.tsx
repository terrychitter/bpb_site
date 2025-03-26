"use client";
import axios from "axios";
import blobGalleryConfig from "@/src/config/blob_gallery";
import Container from "@mui/material/Container";
import GalleryBlobDisplayFilters from "./GalleryBlobDisplayFilters";
import GalleryBlobDisplayItems from "./GalleryBlobDisplayItems";
import Image from "next/image";
import links from "@/src/config/links";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { BlobJsonType } from "@/src/types";
import "../../styling/pagination.css";

export default function PaginatedItems({
  itemsPerPage = blobGalleryConfig.itemsPerPage,
}) {
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState<BlobJsonType[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const responses = await Promise.all(
          Array.from({ length: 250 }, (_, i) =>
            axios.get(`/blobs.json/${i + 1}.json`)
          )
        );
        const data = responses.map((response) => response.data);

        // Ensure it's an array before setting state
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const arrowSize = 20;

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingBlockStart: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GalleryBlobDisplayFilters />
      <GalleryBlobDisplayItems currentItems={currentItems} />
      <ReactPaginate
        previousLabel={
          <Image
            width={arrowSize}
            height={arrowSize}
            src={links.public.ui.icons.arrow}
            alt="Previous"
            className="pagination-arrow"
            style={{ transform: "rotate(180deg)" }}
          />
        }
        nextLabel={
          <Image
            width={arrowSize}
            height={arrowSize}
            src={links.public.ui.icons.arrow}
            alt="Next"
          />
        }
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="active"
      />
    </Container>
  );
}
