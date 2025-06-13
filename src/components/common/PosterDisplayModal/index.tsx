import dynamic from &quot;next/dynamic&quot;;

const PosterDisplayModal = dynamic(() => import(&quot;./PosterDisplayModal.view&quot;), {
  loading: () => &lt;&gt;&lt;/&gt;,
  ssr: false,
});

export default PosterDisplayModal;