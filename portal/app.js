(() => {
  const data = window.PORTAL_DATA;
  const by = id => document.getElementById(id);
  by('problem').textContent = data.overview.problem;
  by('mvpSummary').textContent = data.overview.mvp;
  by('requirementCount').textContent = data.requirements.length;
  by('featureCount').textContent = data.features.length;
  by('teamList').innerHTML = data.team.map(([name, skill]) => `<li><strong>${name}</strong><span>${skill}</span></li>`).join('');

  const sections = by('srsSections');
  const reqSearch = by('requirementSearch');
  function drawRequirements() {
    const term = reqSearch.value.trim().toLowerCase();
    const list = data.requirements.filter(item => !term || `${item.id} ${item.text} ${item.section}`.toLowerCase().includes(term));
    const grouped = list.reduce((map, item) => ((map[item.section] ||= []).push(item), map), {});
    sections.innerHTML = Object.entries(grouped).map(([section, items]) => `<details class="requirement-group" ${term ? 'open' : ''}><summary>${section} <span class="muted">(${items.length})</span></summary>${items.map(item => `<article class="requirement"><code>${item.id}</code> — ${item.text}</article>`).join('')}</details>`).join('') || '<p>No matching requirements.</p>';
  }
  reqSearch.addEventListener('input', drawRequirements); drawRequirements();

  const featureRows = by('featureRows'); const groupFilter = by('groupFilter'); const featureSearch = by('featureSearch'); let activeClass = 'All';
  const groups = [...new Set(data.features.map(f => f.id.split('-')[0]))];
  groupFilter.innerHTML += groups.map(g => `<option value="${g}">${g} feature group</option>`).join('');
  function escape(text) { return String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function drawFeatures() {
    const term = featureSearch.value.trim().toLowerCase(); const group = groupFilter.value;
    const shown = data.features.filter(feature => {
      const info = data.mvp[feature.id] || { classification:'Unclassified', scope:'Not classified in proposed MVP.', acceptance:feature.acceptance };
      return (activeClass === 'All' || info.classification === activeClass) && (group === 'All' || feature.id.startsWith(`${group}-`)) && (!term || `${feature.id} ${feature.name} ${feature.srs} ${info.scope}`.toLowerCase().includes(term));
    });
    featureRows.innerHTML = shown.map(feature => { const info = data.mvp[feature.id] || { classification:'Unclassified', scope:'Not classified in proposed MVP.', acceptance:feature.acceptance }; return `<tr><td><span class="feature-id">${escape(feature.id)}</span><br><strong>${escape(feature.name)}</strong><br><span class="muted">SRS: ${escape(feature.srs)}</span></td><td><span class="badge ${escape(info.classification)}">${escape(info.classification)}</span></td><td>${escape(feature.priority)}</td><td>${escape(info.scope)}<br><span class="muted">Depends on: ${escape(feature.dependencies)}</span></td><td>${escape(info.acceptance || feature.acceptance)}</td></tr>`; }).join('') || '<tr><td colspan="5">No matching features.</td></tr>';
  }
  document.querySelectorAll('[data-class]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-class]').forEach(b => b.classList.remove('active')); button.classList.add('active'); activeClass = button.dataset.class; drawFeatures(); }));
  groupFilter.addEventListener('change', drawFeatures); featureSearch.addEventListener('input', drawFeatures); drawFeatures();
  const menu = by('menu'); const sidebar = by('sidebar'); menu.addEventListener('click', () => { const open = sidebar.classList.toggle('open'); menu.setAttribute('aria-expanded', open); });
  sidebar.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { sidebar.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }));
})();
