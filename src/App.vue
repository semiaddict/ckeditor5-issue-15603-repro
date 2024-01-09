<template>
  <div ref="editor"></div>
</template>

<script>
import { Table } from "@ckeditor/ckeditor5-table";
import { TableToolbar } from "@ckeditor/ckeditor5-table";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";

export default {
  mounted() {
    ClassicEditor.create(this.$refs.editor, {
      language: "fr",
      plugins: [Table, TableToolbar],
      toolbar: {
        items: ["insertTable"],
      },
    });
  },
};
</script>
